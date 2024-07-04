import { NextRequest, NextResponse } from 'next/server'
import dayjs from 'dayjs'
// import { z } from 'zod'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const date = searchParams.get('date') as string

  // const getDayParams = z.object({
  //   date: z.coerce.date()
  // })

  // const { date } = getDayParams.parse(request.body)

  const parsedDate = dayjs(date).startOf('day')
  const weekDay = parsedDate.get('day')

  const possibleHabits = await prisma.habit.findMany({
    where: {
      created_at: {
        lte: date
      },
      weekDays: {
        // quero habito que corresponde com alguns parametros que vou passar
        // se for todos os parametros uso o every
        // se ñ for nenhum dos parametros uso o none
        some: {
          week_day: weekDay
        }
      }
    }
  })

  const day = await prisma.day.findFirst({
    where: {
      date: parsedDate.toDate()
    },
    include: {
      dayHabits: true
    }
  })

  const completedHabits =
    day?.dayHabits.map((dayHabit) => {
      return dayHabit.habit_id
    }) ?? []

  return NextResponse.json({
    possibleHabits,
    completedHabits
  })
}
