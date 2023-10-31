import React, { memo, MouseEventHandler } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './style'

interface IProps {
  children?: ReactNode
  iconClickHandler?: MouseEventHandler
}

const EnterIcon: FC<IProps> = memo((props) => {
  const { iconClickHandler } = props
  return (
    <Wrapper>
      <div className="icon" onClick={iconClickHandler}>
        <img src="/image/enter-key.svg" alt="enter-key-icon" />
      </div>
      <div className="mattress-right">mattress</div>
      <div className="mattress-bottom">mattress</div>
      <div className="mattress-edge">mattress</div>
    </Wrapper>
  )
})

export default EnterIcon

EnterIcon.displayName = 'EnterIcon'
