'use client'

import * as Avatar from '@radix-ui/react-avatar'
import { Gear, House, List, ListChecks } from 'phosphor-react'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import Image from 'next/image'

// TODO:
/**
 * Versão mobile
 */

export function Sidebar() {
  const [isMenuHidden, setIsMenuHidden] = useState(false)

  function handleHideMenu() {
    setIsMenuHidden(!isMenuHidden)
  }

  return (
    <div
      className={`bg-gray-900 h-full ${
        !isMenuHidden && 'min-w-64'
      } px-4 py-2 flex flex-col gap-8 border-r border-r-solid border-r-gray-300`}
    >
      <header className="flex items-center justify-between min-h-14">
        {!isMenuHidden && (
          <Image
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            alt="Avatar"
            className="rounded-full w-12 h-12"
            width={256}
            height={120}
          />
        )}

        <button
          onClick={handleHideMenu}
          className="cursor-pointer rounded-md p-1 border border-solid border-[white]"
        >
          <List size="2rem" />
        </button>
      </header>

      <ul className="flex flex-col gap-2 h-full">
        <SidebarItem to="/">
          <House size="1.75rem" />
          {!isMenuHidden && 'Home'}
        </SidebarItem>

        {/* <SidebarItem to="">
          <CirclesFour />
          Resumo
        </SidebarItem> */}

        <SidebarItem to="/habits">
          <ListChecks size="1.75rem" />
          {!isMenuHidden && 'Habits'}
        </SidebarItem>

        <SidebarItem to="/settings">
          <Gear size="1.75rem" />
          {!isMenuHidden && 'Settings'}
        </SidebarItem>
      </ul>
    </div>
  )
}

interface ISidebarItem {
  to: string
  children: ReactNode
}

export function SidebarItem({ children, to }: ISidebarItem) {
  return (
    <Link
      href={to}
      className="flex items-center gap-4 w-full p-2 cursor-pointer rounded-md text-center text-xl bg-gray-700 hover:bg-gray-400 hover:ease-in"
    >
      {children}
    </Link>
  )
}
