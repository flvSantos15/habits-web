import { FormEvent } from 'react'
import { HabitService } from '../habit.service'

export async function createNewHabit(event: FormEvent) {
  const { createHabit } = new HabitService()

  /**
   * Habilitar o react hook form
   * Pegar os dados no props
   */

  event.preventDefault()
  // setIsSubmmiting(true)

  try {
    // if (!title || weekDays.length === 0) {
    //   return
    // }

    await createHabit({
      title: '',
      weekDays: []
    })

    // onClose()
  } catch (err) {
    // aplicar o sentry
    // TODO: por enquanto criar uma class que me enviar os erros no telegram
    console.log(err)
  } finally {
    // setIsSubmmiting(false)
  }
}
