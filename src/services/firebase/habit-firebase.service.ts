import { fireStoreDb } from '@/config/firebase'
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc
} from 'firebase/firestore'
import { v4 as uuidV4 } from 'uuid'

interface ICreateNewHabit {
  today: Date
  title: string
  weekDays: number[]
  userId: string
}

interface IToggleHabit {
  habitID: string
  today: Date
}

export async function getAllHabits() {}

export async function createNewHabitFirebase({
  title,
  weekDays,
  today,
  userId
}: ICreateNewHabit) {
  const collectionPath = `habits/users/${userId}`

  const newHabitData = {
    id: uuidV4(),
    title,
    today,
    userId,
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime()
  }
  console.log('newHabitData', newHabitData)

  try {
    const habitCollectionReference = doc(
      fireStoreDb,
      collectionPath,
      newHabitData.id
    )

    console.log('antes')
    const result = await setDoc(habitCollectionReference, newHabitData)
    console.log('depois', result)

    const dataWithAmountOfNotes = { ...newHabitData, amountOfNotes: 0 }

    const habitWeekDaysCollectionPath = `habits/users/${userId}/${newHabitData.id}/weekDays`

    for (const weekDay of weekDays) {
      await addDoc(collection(fireStoreDb, habitWeekDaysCollectionPath), {
        weekDay
      })
    }

    console.log('Fim')

    return dataWithAmountOfNotes
  } catch (error) {
    console.log('error', error)
    throw new Error(error)
  }
}

export async function toggleHabit({ habitID, today }: IToggleHabit) {}

export async function deleteHabit(habitID: string) {}
