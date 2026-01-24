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

    return summary
  }
}
