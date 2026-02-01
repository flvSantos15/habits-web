// import dayjs from 'dayjs'
import { dayjs } from '@/lib/dayjs'

export function generateDatesFromYearBeginning() {
  const firstDayOfTheYear = dayjs().utc().startOf('year')
  const today = new Date()

  const weekDay = firstDayOfTheYear.get("day")
  const sundayDay = 0
  const daysToAddUntilSunday = weekDay - sundayDay

  const dates = []
  let compareDate = firstDayOfTheYear.subtract(daysToAddUntilSunday, 'day')

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate())
    compareDate = compareDate.add(1, 'day')
  }

  return dates
}
