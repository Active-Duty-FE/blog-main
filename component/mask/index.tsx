import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './style'
import { MouseEventHandler } from 'react'
interface IProps {
  children?: ReactNode
  maskClick?: MouseEventHandler<HTMLDivElement>
  position?: 'absolute' | 'fixed'
  blur?: number
  index?: number
}

const Mask: FC<IProps> = memo((props) => {
  const { blur } = props
  const { maskClick, children, position, index } = props
  return (
    <Wrapper className="mask" onClick={maskClick} position={position} blur={blur} index={index}>
      {children}
    </Wrapper>
  )
})

export default Mask

Mask.displayName = 'Mask'
