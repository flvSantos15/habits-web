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
            cast(count(*) as float)
          FROM day_habits DH
          WHERE DH.day_id = D.id
        ) as completed,
        (
          SELECT
            cast(count(*) as float)
          FROM habit_week_days HDW
          JOIN habits H
            ON H.id = HDW.habit_id
          WHERE
            HDW.week_day = cast(strftime('%w', D.date/1000.0, 'unixepoch') as int)
            AND H.created_at <= D.date
        ) as amount
      FROM days D
      `

    return summary.map((item) => {
      return {
        ...item,
        completed: Number(item.completed.toString().replace('n', '')),
        amount: Number(item.amount.toString().replace('n', ''))
      }
    })
  }
}
