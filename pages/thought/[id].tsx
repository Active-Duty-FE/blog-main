import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Layout from '@component/layout'
import type { GetStaticProps, GetStaticPaths } from 'next'
import MarkdownIt from 'markdown-it'
import { fetchAllPosts, fetchAllThoughts, fetchPost, fetchThought } from '@service/post'
import { Post } from 'type'
import StyledMarkdown from '@styles/styled-markdown'
import Wrapper from './style'
import ThoughtList from './thought-list'
const path = require('path')
interface IProps {
  children?: ReactNode
  thought: Post
  thoughts: Post[]
}
type Params = {
  title: string
}
const PostDetail: FC<IProps> = memo((props) => {
  const { thought, thoughts } = props
  const md = new MarkdownIt()
  const content = md.render(thought.content)
  return (
    <Layout>
      <Wrapper>
        <StyledMarkdown dangerouslySetInnerHTML={{ __html: content }}></StyledMarkdown>
        <div className="post-list">
          <h2 className="post-list-title">Menu</h2>
          <ThoughtList thoughts={thoughts} />
        </div>
      </Wrapper>
    </Layout>
  )
})
export const getStaticPaths: GetStaticPaths = async () => {
  const resultAll = await fetchAllThoughts<Post[]>()
  return {
    paths: resultAll.data.map((item, index) => ({
      params: {
        id: item.id.toString()
      }
    })),
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async (context) => {
  const result = await fetchThought<Post>(context.params?.id as string)
  const resultAll = await fetchAllThoughts<Post[]>()
  return {
    props: {
      thought: result.data,
      thoughts: resultAll.data
    }
  }
}
export default PostDetail

PostDetail.displayName = 'PostDetail'
