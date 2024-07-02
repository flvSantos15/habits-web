'use client'

import { ArrowRight } from 'phosphor-react'
import { signIn } from '@/services/firebase/auth'

export default function ConnectCalendar() {
  const handleAuthenticate = async () => {
    await signIn()
  }

  return (
    <div className="">
      <header>
        <h2>Conecte sua agenda!</h2>
        <h4>
          Conecte o seu calendário para verificar automaticamente as horas
          ocupadas e os novos eventos à medida em que são agendados.
        </h4>
      </header>

      <div>
        <div>
          <p>Google Calendar</p>
          <button
            onClick={() => handleAuthenticate()}
          >
            Conectar
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}