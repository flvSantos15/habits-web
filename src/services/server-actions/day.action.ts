'use server'

import { prisma } from '@/lib/prisma'
import dayjs from 'dayjs'

export async function getDays(date: string) {
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

  return {
    possibleHabits: possibleHabits.map((item) => ({
      id: item.id,
      title: item.title,
      createdAt: item.created_at
    })),
    completedHabits
  }
}
