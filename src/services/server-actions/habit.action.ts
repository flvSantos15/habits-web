'use server'

import { prisma } from '@/lib/prisma'

interface ICreateNewHabit {
  today: Date
  title: string
  weekDays: number[]
}

interface IToggleHabit {
  habitID: string
  today: Date
}

export async function createNewHabit({
  title,
  weekDays,
  today
}: ICreateNewHabit) {
  try {
    await prisma.habit.create({
      data: {
        title,
        created_at: today,
        weekDays: {
          create: weekDays.map((weekDay) => {
            return {
              week_day: weekDay
            }
          })
        }
      }
    })

    return { message: 'Created sucessfully!' }
  } catch (err) {
    throw new Error(`Internal server error ${err}`)
  }
}

export async function toggleHabit({ habitID, today }: IToggleHabit) {
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
        habit_id: habitID
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
        habit_id: habitID
      }
    })
  }

  return { message: 'Updated sucessfully' }
}
