import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './style'

interface IProps {
  children?: ReactNode
}

const Loading: FC<IProps> = memo(() => {
  return <Wrapper>Loading</Wrapper>
})

export default Loading

Loading.displayName = 'Loading'
