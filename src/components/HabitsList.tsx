'use client'

import { HabitService } from '@/services/habit.service'

import { HabitItem } from './HabitItem'

// TODO:
/**
 * Listar todos os hábitos aqui
 */

export async function HabitList() {
  const { getAllHabits, deleteHabit } = new HabitService()

  const habits = await getAllHabits()

  async function handleDeleteHabit(id: string) {
    await deleteHabit(id)
  }

  return (
    <div className="flex flex-col items-start m-auto my-16 p-0 gap-6 w-[90%] xl:w-[55%] md:w-[75%] sm:w-[90%]">
      <header className="text-2xl font-semibold text-purple-600">
        Lista de Hábitos
      </header>

      <div className="flex flex-col justify-center items-center gap-4 w-full rounded-lg border-t border-t-solid border-t-[#333333]">
        {habits.map((habit) => {
          return (
            <HabitItem
              key={habit.id}
              id={habit.id}
              name={habit.title}
              onRemoveTask={handleDeleteHabit}
            />
          )
        })}
      </div>
    </div>
  )
}
