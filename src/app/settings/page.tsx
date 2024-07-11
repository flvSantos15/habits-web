// TODO:
/**
 * Configurar tema
 * Etc
 */

import { Sidebar } from '@/components/Sidebar'

export default function Settings() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <Sidebar />

      <div className="w-full flex flex-col gap-16 px-1 lg-pl-6">
        Settings page
      </div>
    </main>
  )
}
