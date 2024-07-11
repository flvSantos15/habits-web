// TODO:
/**
 * Pode ser uma table de todos os hábitos cadastrados
 * Os que não são possíveis editar ou excluir aparecem escurecidos
 * Os que serão possíveis as ações podem estar mais aparentes
 * Usar a tabela do radix
 * Futuramente pensar em páginação
 * Lembrar de dar foco no mobile
 */

import { HabitList } from '@/components/HabitsList'
import { Sidebar } from '@/components/Sidebar'

export default function Settings() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <Sidebar />

      <div className="w-full flex flex-col gap-16 px-1 lg-pl-6">
        <HabitList />
      </div>
    </main>
  )
}
