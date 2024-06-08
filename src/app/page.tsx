import { Header } from '@/components/Header'
import { SummaryTable } from '@/components/SummaryTable'

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="w-full flex flex-col gap-16 pl-6">
        <Header />

        <SummaryTable />
      </div>
    </main>
  )
}
