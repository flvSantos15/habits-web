import { getDays } from './server-actions/day.action'

export class DayService {
  async getDays(date: string) {
    const daysInfo = await getDays(date)

    return daysInfo
  }
}
