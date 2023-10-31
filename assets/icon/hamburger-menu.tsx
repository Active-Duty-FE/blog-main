import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Image from 'next/image'

interface IProps {
  children?: ReactNode
}

const HamburgerMenu: FC<IProps> = memo(() => {
  return (
    <>
      <Image width={36} height={36} src="/image/hamburger-menu.svg" alt="hamburger-menu" />
    </>
  )
})

export default HamburgerMenu
