import dayjs from 'dayjs'
import { createNewHabit, toggleHabit } from './server-actions/habit.action'

export class HabitService {
  async createHabit(input: { title: string; weekDays: number[] }) {
    const today = dayjs().startOf('day').toDate()

    const { title, weekDays } = input

    await createNewHabit({
      title,
      weekDays,
      today
    })
  }

  async toggleHabit(habitId: string) {
    const today = dayjs().startOf('day').toDate()

    await toggleHabit({ habitID: habitId, today })
  }
}
