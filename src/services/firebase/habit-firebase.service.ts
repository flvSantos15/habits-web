interface ICreateNewHabit {
  today: Date
  title: string
  weekDays: number[]
}

interface IToggleHabit {
  habitID: string
  today: Date
}

export async function getAllHabits() {}

export async function createNewHabit({
  title,
  weekDays,
  today
}: ICreateNewHabit) {}

export async function toggleHabit({ habitID, today }: IToggleHabit) {}

export async function deleteHabit(habitID: string) {}
