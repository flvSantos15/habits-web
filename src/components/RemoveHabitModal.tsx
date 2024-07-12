import { HabitService } from '@/services/habit.service'

interface INewHabitFormProps {
  id?: string
  onClose: () => void
}

export function RemoveHabit({ onClose, id }: INewHabitFormProps) {
  // TODO: change this service
  // TODO: create a service to search for a single habit
  const { createHabit } = new HabitService()

  return (
    <div className="w-full flex flex-col gap-2 mt-1">
      <h5 className="font-semibold leading-tight">
        Esse hábito não poderá ser mais acessível.
      </h5>

      <div className="flex gap-4 my-1 justify-end">
        <button className="bg-gray-200 rounded-md py-0 px-4 text-base font-medium h-9">
          Cancelar
        </button>

        <button className="bg-red-700 rounded-md py-0 px-4 text-base font-medium h-9">
          Sim, Excluir hábito
        </button>
      </div>
    </div>
  )
}
