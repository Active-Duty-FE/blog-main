import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Link from 'next/link'
import Wrapper from './style'
import { menus } from './config'
import classNames from 'classnames'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

interface IProps {
  children?: ReactNode
  open?: boolean
}

const Sidebar: FC<IProps> = memo((props) => {
  const { open } = props
  // Router
  const router = useRouter()
  const pathname = router.pathname
  // Effects
  useEffect(() => {})
  return (
    <Wrapper className="flex" open={open}>
      <ul>
        {menus.map((item, index) => {
          return (
            <li className={classNames('menu-item', pathname === item.href && 'active')} key={index}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          )
        })}
      </ul>
    </Wrapper>
  )
})

export default Sidebar

Sidebar.displayName = 'Sidebar'
