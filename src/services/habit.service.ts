import { prisma } from '@/lib/prisma'
import dayjs from 'dayjs'

export class HabitService {
  async createHabit(input: { title: string; weekDays: number[] }) {
    try {
      const today = dayjs().startOf('day').toDate()

      const { title, weekDays } = input

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

  async toggleHabit(habitId: number) {
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
          habit_id: habitId
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
          habit_id: habitId
        }
      })
    }

    return { message: 'Updated sucessfully' }
  }
}

/**
 * Esse serviço vai buscar todos os habitos para o dia passado
 * Vai criar os habitos e marcar como feitos ou não
 */
