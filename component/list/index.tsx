import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './style'

interface IProps {
  children?: ReactNode
}

const List: FC<IProps> = memo((props) => {
  const { children } = props
  return (
    <Wrapper>
      <ul>{children}</ul>
    </Wrapper>
  )
})

export default List

List.displayName = 'List'
