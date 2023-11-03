import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Sidebar from '@component/sidebar'
import Wrapper from './style'
import HamburgerMenu from '@icon/hamburger-menu'
import { useState } from 'react'
import checkDevice from 'util/checkDevice'
import { useEffect } from 'react'
import { updateDevice, updateWidth } from '@store/module/device'
import { useAppDispatch, useAppSelector } from '@hook/redux'
import Mask from '@component/mask'
import { shallowEqual } from 'react-redux'
import Footer from '@component/footer'
import useDevice from '@hook/device'

interface IProps {
  children?: ReactNode
}

const Layout: FC<IProps> = memo((props) => {
  const { children } = props
  const appDispatch = useAppDispatch()
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const menuBarClickHandle = () => {
    setMenuOpen(true)
  }
  const device = useDevice()

  const maskClickHandler = () => {
    setMenuOpen(false)
  }
  return (
    <Wrapper className="content-wrap flex direction-column">
      <div className="background indent-full">background</div>
      {device?.type === 'mobile' && (
        <>
          <Sidebar open={menuOpen} />
          {menuOpen ? (
            <Mask maskClick={maskClickHandler} blur={0} index={2} />
          ) : (
            <div className="hamburger-menu" onClick={menuBarClickHandle}>
              <HamburgerMenu />
            </div>
          )}
        </>
      )}
      {device?.type === 'pc' && <Sidebar />}
      {children}
      <Footer></Footer>
    </Wrapper>
  )
})

export default Layout

Layout.displayName = 'Layout'
