'use client'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import * as AlertDialog from '@radix-ui/react-alert-dialog'

import { EditHabitForm } from './EditHabitForm'

import { PencilSimple, Trash, X } from 'phosphor-react'
import { RemoveHabit } from './RemoveHabitModal'

interface TodoItemProps {
  id: string
  name: string
  onRemoveTask?: (id: string) => void
}

export function HabitItem({ id, name, onRemoveTask }: TodoItemProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isRemoveDialogOpen, setIsRemoveDialogOpen] = useState(false)

  const handleOpenDialog = () => {
    setIsDialogOpen(!isDialogOpen)
  }

  const handleOpenDeleteHabit = () => {
    setIsRemoveDialogOpen(!isRemoveDialogOpen)
  }

  return (
    <>
      <div className="flex justify-between items-center p-4 gap-3 w-full h-[4.5rem] bg-[#262626] border border-solid border-[#333333] shadow-[0px_2px_8px_rgba(0,0,0,0.06)] rounded-lg text-xl sm:text-base cursor-pointer">
        <div className="flex items-center gap-3">
          <p className="font-[Inter] font-normal text-sm text-[#f2f2f2] flex-1 w-full">
            {name}
          </p>
        </div>

        <div className="flex gap-1 p-0">
          <Dialog.Root open={isDialogOpen} onOpenChange={handleOpenDialog}>
            <Dialog.Trigger
              type="button"
              data-cy="editTaskButton"
              className="flex items-center justify-center w-[1.5rem] h-[1.5rem]"
            >
              <PencilSimple color="#4ea8de" />
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

              <Dialog.Content className="absolute flex flex-col gap-4 p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Dialog.Close className="absolute right-6 top-6 text-zinc-400 hover:text-zinc-200">
                  <X size={24} aria-label="Fechar" />
                </Dialog.Close>

                <Dialog.Title data-cy="editModal">Editar todo</Dialog.Title>

                <EditHabitForm
                  // taskId={taskId}
                  // status={isCompleted}
                  // taskText={taskTitle}
                  onClose={() => setIsDialogOpen(false)}
                />
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          <AlertDialog.Root
            open={isRemoveDialogOpen}
            onOpenChange={handleOpenDeleteHabit}
          >
            <AlertDialog.Trigger
              type="button"
              data-cy="removeTaskButton"
              className="flex items-center justify-center w-[1.5rem] h-[1.5rem]"
            >
              <Trash color="#fa0404" />
            </AlertDialog.Trigger>

            <AlertDialog.Portal>
              <AlertDialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />

              <AlertDialog.Content className="absolute flex flex-col gap-4 p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <AlertDialog.Title>Tem certeza?</AlertDialog.Title>

                {/* <RemoveHabit onClose={() => setIsRemoveDialogOpen(false)} /> */}

                <div className="w-full flex flex-col gap-2 mt-1">
                  <h5 className="font-semibold leading-tight">
                    Esse hábito não poderá ser mais acessível.
                  </h5>

                  <div className="flex gap-4 my-1 justify-end">
                    <button className="bg-gray-200 rounded-md py-0 px-4 text-base font-medium h-9">
                      Cancelar
                    </button>

                    <button
                      onClick={() => onRemoveTask(id)}
                      className="bg-red-700 rounded-md py-0 px-4 text-base font-medium h-9"
                    >
                      Sim, Excluir hábito
                    </button>
                  </div>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Portal>
          </AlertDialog.Root>
        </div>
      </div>
    </>
  )
}
