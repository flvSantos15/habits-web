import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import { SummaryTable } from '@/components/SummaryTable'

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center">
      <Sidebar />

      <div className="max-w-[80%] h-full flex flex-col gap-16 px-1 lg-pl-6 pt-14">
        <Header />

        <SummaryTable />
      </div>
    </main>
  )
}
