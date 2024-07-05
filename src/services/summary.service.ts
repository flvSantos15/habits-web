import { prisma } from '@/lib/prisma'
import { HabitSummaryProps } from '@/models'

export class SummaryService {
  async getSummary(): Promise<HabitSummaryProps[]> {
    const summary = await prisma.$queryRaw<HabitSummaryProps[]>`
        SELECT 
          D.id, 
          D.date,
          (
            SELECT 
              count(DH.id)
            FROM day_habits DH
            WHERE DH.day_id = D.id
          ) as completed,
          (
            SELECT
              count(HWD.id)
            FROM habit_week_days HWD
            JOIN habits H
              ON H.id = HWD.habit_id
            WHERE
              HWD.week_day = strftime(D.date/1000.0, '%d%m')
              AND H.created_at <= D.date
          ) as amount
        FROM days D
      `

    return summary
  }
}
