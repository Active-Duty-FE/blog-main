import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './style'
interface IProps {
  children?: ReactNode
}

const Code: FC<IProps> = memo((props) => {
  const { children } = props
  return <Wrapper>{children}</Wrapper>
})

export default Code

Code.displayName = 'Code'
