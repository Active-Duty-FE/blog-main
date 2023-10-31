import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './style'

interface IProps {
  children?: ReactNode
  setDownPopupVisible: () => void
  width: number
  height: number
}

const Popup: FC<IProps> = memo((props) => {
  const { children, width = 200, height = 200, setDownPopupVisible } = props
  const closeClickHandler = () => {
    setDownPopupVisible()
  }
  return (
    <Wrapper {...props}>
      {children}
      <div className="close" onClick={closeClickHandler}>
        close
      </div>
    </Wrapper>
  )
})

export default Popup

Popup.displayName = 'Popup'
