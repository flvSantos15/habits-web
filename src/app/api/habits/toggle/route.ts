import { NextRequest, NextResponse } from 'next/server'
import dayjs from 'dayjs'
// import { z } from 'zod'
import { prisma } from '@/lib/prisma'

export async function PATCH(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('habitId') as string

  // const toggleHabitParams = z.object({
  //   id: z.string().uuid()
  // })

  // const { id } = toggleHabitParams.parse(request.query)

  const today = dayjs().startOf('day').toDate()

  let day = await prisma.day.findUnique({
    where: {
      date: today
    }
  })

  if (!day) {
    day = await prisma.day.create({
      data: {
        date: today
      }
    })
  }

  const dayHabit = await prisma.dayHabit.findUnique({
    where: {
      day_id_habit_id: {
        day_id: day.id,
        habit_id: id
      }
    }
  })

  // if there's completed habit
  if (dayHabit) {
    // i need to uncomplete this habit
    await prisma.dayHabit.delete({
      where: {
        id: dayHabit.id
      }
    })
  } else {
    // if there ins't
    // i must complete it
    await prisma.dayHabit.create({
      data: {
        day_id: day.id,
        habit_id: id
      }
    })
  }

  return NextResponse.json({ message: 'Updated sucessfully' })
}
