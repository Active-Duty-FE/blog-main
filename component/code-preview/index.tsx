import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './style'
import { MouseEventHandler } from 'react'
import type { Device, Movement } from 'type'
interface IProps {
  children?: ReactNode
  tag?: string
  color?: string
  onClickHandler?: MouseEventHandler
  shake?: boolean
  movement?: Movement
  delay?: number
  transformState?: boolean
  deviceWidth?: number
}

const CodePreview: FC<IProps> = memo((props) => {
  const { children, tag, color, onClickHandler, shake, movement, delay, transformState, deviceWidth } = props

  return (
    <Wrapper
      color={color}
      shake={shake}
      movement={movement}
      delay={delay}
      transformState={transformState}
      deviceWidth={deviceWidth}
    >
      <div className="tag">{tag}</div>
      <div className="preview" onClick={onClickHandler}>
        {children}
      </div>
    </Wrapper>
  )
})

export default CodePreview

CodePreview.displayName = 'CodePreview'
