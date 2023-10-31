import React, { Context, memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Post } from 'type'
import Wrapper from './style'
import Layout from '@component/layout'
import EnterIcon from '@icon/enter-icon'
import CodeStream from '@component/code-stream'

interface IProps {
  children?: ReactNode
  post: Post
}

const Test: FC<IProps> = memo((props) => {
  const { post } = props
  return (
    <Wrapper className="flex">
      <Layout>
        <EnterIcon />
      </Layout>
    </Wrapper>
  )
})

export default Test

Test.displayName = 'Test'
