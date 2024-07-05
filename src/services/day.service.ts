import { prisma } from '@/lib/prisma'
import dayjs from 'dayjs'
// import { z } from 'zod'

export class DayService {
  async getDays(date: string) {
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

    return {
      possibleHabits,
      completedHabits
    }
  }
}

/**
 * Esse serviço vai buscar todos os habitos para o dia passado
 * Vai buscar os para completar
 * Var buscar os completados
 */

/**
 * Esse serviço não pode ficar preso ao prisma, ou db
 * Deve ser possivel usar com firebase, locaStorage ou outro DB
 */
