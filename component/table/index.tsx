import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './styled'

interface IProps {
  children?: ReactNode
}

const Table: FC<IProps> = memo(({ children }) => {
  return <Wrapper>{children}</Wrapper>
})

export default Table

Table.displayName = 'Table'
