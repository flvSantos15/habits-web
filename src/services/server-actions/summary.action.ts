'use server'

import { api } from '@/lib/axios'

export async function getSummaryAction() {
  const { data } = await api.get('/summary')

  return data
}
