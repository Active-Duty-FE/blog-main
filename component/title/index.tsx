import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './style'

interface IProps {
  children?: ReactNode
}

const Title: FC<IProps> = memo((props) => {
  const { children } = props
  return (
    <Wrapper>
      <h2 className="item">{children}</h2>
      <div className="line indent-full">line</div>
    </Wrapper>
  )
})

export default Title

Title.displayName = 'Title'
