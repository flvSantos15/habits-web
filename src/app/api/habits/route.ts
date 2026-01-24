import dayjs from 'dayjs'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  if (req.method === 'POST') {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title')
    const weekDays = searchParams.get('weekDays')

    let weekArray = weekDays.split(',').map(Number)

    try {
      const today = dayjs().startOf('day').toDate()

      // await prisma.habit.create({
      //   data: {
      //     title,
      //     created_at: today,
      //     weekDays: {
      //       create: weekArray.map((weekDay) => {
      //         return {
      //           week_day: weekDay
      //         }
      //       })
      //     }
      //   }
      // })

      return NextResponse.json({ message: 'Created sucessfully!' })
    } catch (err) {
      NextResponse.json({ message: 'Internal server error.' })
    }
  } else {
    NextResponse.json({ message: 'Method not allowed.' })
  }
}
