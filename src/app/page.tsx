import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { SummaryTable } from '@/components/SummaryTable'

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center border border-solid border-[red]">
      <Sidebar />

      <div className="w-[80%] flex flex-col gap-16 px-1 lg-pl-6">
        <Header />

        <SummaryTable />
      </div>
    </main>
  )
}
