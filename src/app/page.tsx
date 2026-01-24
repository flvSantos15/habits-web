import { Header } from '@/components/Header'
import { SummaryTable } from '@/components/SummaryTable'

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="max-w-full h-full flex flex-col gap-16 px-1 lg-pl-6 pt-14">
        <Header />

        <SummaryTable />
      </div>
    </main>
  )
}
