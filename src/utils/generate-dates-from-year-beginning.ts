// import dayjs from 'dayjs'
import { dayjs } from '@/lib/dayjs'

export function generateDatesFromYearBeginning() {
  const firstDayOfTheYear = dayjs().startOf('year')
  const today = new Date()

  const weekDay = firstDayOfTheYear.get("day")
  const sundayDay = 0
  const daysToAddUntilSunday = weekDay - sundayDay

  const dates = []
  let compareDate = firstDayOfTheYear.subtract(daysToAddUntilSunday, 'day')

  while (compareDate.isBefore(today)) {
    const date = compareDate.format('YYYY/MM/DD')
    dates.push(date)
    compareDate = compareDate.add(1, 'day')
  }

  return dates
}
