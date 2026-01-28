'use server'

import { api } from '@/lib/axios'

interface ICreateNewHabit {
  today: Date
  title: string
  weekDays: number[]
}

interface IToggleHabit {
  habitID: string
  today: Date
}

type Habit = Partial<ICreateNewHabit> & {
  id: string
}

export async function getAllHabits() {
  try {
    // const habits = await prisma.habit.findMany({})
    const habits = await api.get('/habits')

    // TODO: Essa rota não existe no servidor
    return habits
  } catch (err) {
    throw new Error(`Internal server error ${err}`)
  }
}

export async function createNewHabit({
  title,
  weekDays,
  today
}: ICreateNewHabit) {
  try {
    await api.post('/habits', {
      title,
      created_at: today,
      weekDays
    })

    return { message: 'Created sucessfully!' }
  } catch (err) {
    console.log(err)
    throw new Error(`Internal server error ${err}`)
  }
}

export async function toggleHabit({ habitID }: IToggleHabit) {
  await api.patch(`/habits/:${habitID}/toggle`)

  return { message: 'Updated sucessfully' }
}

export async function deleteHabit(habitID: string) {


  return { message: 'Updated sucessfully' }
}
