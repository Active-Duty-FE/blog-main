import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './style'
import { MouseEventHandler } from 'react'

interface IProps {
  children?: ReactNode
  onClick?: MouseEventHandler
}

const Button: FC<IProps> = memo((props) => {
  const { children, onClick } = props
  return <Wrapper onClick={onClick}>{children}</Wrapper>
})

export default Button

Button.displayName = 'Button'
