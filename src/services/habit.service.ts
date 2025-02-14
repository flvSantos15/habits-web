import dayjs from 'dayjs'
import {
  getAllHabits,
  createNewHabit,
  deleteHabit,
  toggleHabit
} from './server-actions/habit.action'
import { createNewHabitFirebase } from './firebase/habit-firebase.service'

export class HabitService {
  async getAllHabits() {
    const data = await getAllHabits()

    return data
  }

  async createHabit(input: { title: string; weekDays: number[] }) {
    const today = dayjs().startOf('day').toDate()

    const { title, weekDays } = input

    await createNewHabitFirebase({
      title,
      weekDays,
      today,
      userId: '1'
    })
    // await createNewHabit({
    //   title,
    //   weekDays,
    //   today
    // })
  }

  async toggleHabit(habitId: string) {
    const today = dayjs().startOf('day').toDate()

    await toggleHabit({ habitID: habitId, today })
  }

  async deleteHabit(habitID: string) {
    await deleteHabit(habitID)
  }

  // TODO:
  /**
   * Criar uma função de editar o hábito
   * Posso querer renomear o hábito
   * Posso querer incluir em mais algun dia ou remover
   */
}
