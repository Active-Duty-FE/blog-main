import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './style'
import { useRef, useEffect } from 'react'

interface IStatus {
  type: boolean
  end?: boolean
}
interface IProps {
  children?: string
  streamStatus: { type: boolean; end?: boolean }
  streamEndCB?: (index: number) => void
  streamIndex: number
}

const CodeStream: FC<IProps> = memo((props) => {
  // Props
  const { children = '', streamStatus, streamEndCB, streamIndex } = props
  // Refs
  const codeRef = useRef<HTMLDivElement>(null)
  // Effects
  useEffect(() => {
    if (streamStatus.type) {
      startSteaming(streamStatus)
    }
  }, [streamStatus.type, streamStatus.end])
  // Streaming
  const startSteaming = (status: IStatus) => {
    const _children = Array.from(children)
    let index = 0
    if (status.type) {
      const interval = setInterval(() => {
        codeRef.current && codeRef.current.append(_children[index])
        index++
        if (index >= _children.length) {
          clearInterval(interval)
          streamEndCB && streamEndCB(streamIndex)
        }
      }, 30)
      if (status.end) {
        clearInterval(interval)
        codeRef.current!.innerText = ''
        codeRef.current!.innerText = children
        // streamEndCB && streamEndCB(streamIndex)
      }
    }
  }

  return (
    <Wrapper>
      <div className="code" ref={codeRef}></div>
    </Wrapper>
  )
})

export default CodeStream

CodeStream.displayName = 'CodeStream'
