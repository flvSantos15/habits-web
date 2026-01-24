'use server'

import { api } from '@/lib/axios'

export async function getDays(date: string) {
  const data = await api.get('/day', {
    params: { date }
  })

  return {
    possibleHabits: data.data.possibleHabits,
    completedHabits: data.data.completedHabits
  }
}
