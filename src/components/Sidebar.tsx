'use client'

import * as Avatar from '@radix-ui/react-avatar'
import { Logo } from './Logo'
import { CirclesFour, Gear, House, ListChecks } from 'phosphor-react'

// TODO:
/**
 * Background no sidebar
 * Background no ul
 * Background no li
 * Hover
 * Função de esconder o sidebar
 */

export function Sidebar() {
  return (
    <div className="border bordersolid border-[green] h-full w-[20%] p-2 flex flex-col gap-8">
      <header className="flex items-center justify-between">
        <div className="w-20">
          <Logo />
        </div>

        <Avatar.Avatar>
          <Avatar.Image
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            alt="Avatar"
            className="rounded-full w-14 h-14"
          />
        </Avatar.Avatar>
      </header>

      <ul className="flex flex-col gap-1 border border-solid border-[blue] h-full">
        <li className="flex items-center gap-4 w-full py-2 cursor-pointer text-center text-xl">
          <House />
          Home
        </li>

        <li className="flex items-center gap-4 w-full py-2 cursor-pointer text-center text-xl">
          <CirclesFour />
          Resumo
        </li>

        <li className="flex items-center gap-4 w-full py-2 cursor-pointer text-center text-xl">
          <ListChecks />
          Habits
        </li>

        <li className="flex items-center gap-4 w-full py-2 cursor-pointer text-center text-xl">
          <Gear />
          Settings
        </li>
      </ul>
    </div>
  )
}
