import { prisma } from '@/lib/prisma'
import { HabitSummaryProps } from '@/models'

const summary: HabitSummaryProps[] = [
  {
    id: '1',
    date: '2025-02-11',
    amount: 4,
    completed: 3
  },
  {
    id: '2',
    date: '2023-02-10',
    amount: 5,
    completed: 2
  }
]

export class SummaryService {
  async getSummary(): Promise<HabitSummaryProps[]> {
    // const summary = await prisma.$queryRaw<HabitSummaryProps[]>`
    //     SELECT
    //     D.id,
    //     D.date,
    //     (
    //       SELECT
    //         cast(count(*) as float)
    //       FROM day_habits DH
    //       WHERE DH.day_id = D.id
    //     ) as completed,
    //     (
    //       SELECT
    //         cast(count(*) as float)
    //       FROM habit_week_days HDW
    //       JOIN habits H
    //         ON H.id = HDW.habit_id
    //       WHERE
    //         HDW.week_day = cast(strftime('%w', D.date/1000.0, 'unixepoch') as int)
    //         AND H.created_at <= D.date
    //     ) as amount
    //   FROM days D
    //   `

    // return summary.map((item) => {
    //   return {
    //     ...item,
    //     completed: Number(item.completed.toString().replace('n', '')),
    //     amount: Number(item.amount.toString().replace('n', ''))
    //   }
    // })

    return summary
  }
}
