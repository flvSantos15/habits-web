'use client'

import { useEffect, useState } from 'react'

// import { TTask, useTask } from '../../context/useTask'

import { HabitItem } from './HabitItem'

export function TodoList() {
  // const { task, removeTask } = useTask()

  // const [todo, setTodo] = useState<TTask[]>([])
  // const [completedTodo, setCompletedTodo] = useState<TTask[]>([])

  // const handleRemoveTask = (id: number) => {
  //   const newTaskList = todo.filter((t) => t.id !== id)

  //   setTodo(newTaskList)
  //   removeTask(id)
  // }

  // useEffect(() => {
  //   setTodo(task)
  // }, [task])

  // useEffect(() => {
  //   setCompletedTodo(
  //     todo.filter((i) => {
  //       return i.isCompleted === true
  //     })
  //   )
  // }, [todo])

  return (
    <div className="flex flex-col items-start m-auto my-16 p-0 gap-6 w-[90%] xl:w-[55%] md:w-[75%] sm:w-[90%]">
      <div className="flex flex-col justify-center items-center gap-4 w-full rounded-lg border-t border-t-solid border-t-[#333333]">
        <p className="font-[Inter] font-normal text-sm text-[#f2f2f2] flex-1 w-full cursor-pointer">
          Beber água
        </p>

        {/* {todo.map((t) => {
          return (
            <HabitItem
              key={t.id}
              taskTitle={t.name}
              taskId={t.id}
              isCompleted={t.isCompleted}
              onCheckTask={() => handleCheckTask(t)}
              onRemoveTask={() => handleRemoveTask(t.id)}
            />
          )
        })} */}
      </div>
    </div>
  )
}
