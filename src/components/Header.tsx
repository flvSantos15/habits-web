'use client'

import { useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { Plus, X } from 'phosphor-react'

import { NewHabitForm } from './NewHabitForm'
import { Logo } from './Logo'

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="w-full mx-auto px-1 flex items-center justify-end">
      {/* <Logo /> */}

      <Dialog.Root open={isModalOpen}>
        <Dialog.Trigger
          type="button"
          onClick={handleOpenModal}
          className="border border-violet-500 font-semibold rounded-lg px-4 lg-px-6 py-3 lg-py-4 flex items-center gap-3 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background"
        >
          <Plus size={20} className="text-violet-500" />
          Novo hábito
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay
            onClick={handleCloseModal}
            className="w-screen h-screen bg-black/80 fixed inset-0"
          />
          <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Dialog.Close
              onClick={handleCloseModal}
              className="absolute right-6 top-6 text-zinc-400 rounded-lg hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              <X size={24} aria-label="Fechar" />
            </Dialog.Close>

            <Dialog.Title className="text-3xl leading-tight text-white font-extrabold">
              Criar hábito
            </Dialog.Title>

            <NewHabitForm onClose={handleCloseModal} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
