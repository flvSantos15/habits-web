import Image from 'next/image'

import logoImg from '../assets/logo.svg'

export function Logo() {
  return <Image src={logoImg} alt="Habits" />
}
