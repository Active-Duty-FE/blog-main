import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import Wrapper from './style'

interface IProps {
  children?: ReactNode
}

const Close: FC<IProps> = memo(() => {
  return (
    <Wrapper>
      <span className="left indent-full">bar</span>
      <span className="right indent-full">bar</span>
    </Wrapper>
  )
})

export default Close

Close.displayName = 'Close'
