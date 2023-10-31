import React, { Children, memo } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './style'

interface IProps {
  children?: ReactNode
  animate?: boolean
}

const ListItem: FC<IProps> = memo((props) => {
  const { children, animate } = props
  return (
    <Wrapper animate={animate}>
      <div className="item">
        {children}
        <div className="line indent-full">line</div>
      </div>
    </Wrapper>
  )
})

export default ListItem

ListItem.displayName = 'ListItem'
