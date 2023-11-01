import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Layout from '@component/layout'
import type { GetStaticProps, GetStaticPaths } from 'next'
import Markdown from 'react-markdown'
import { fetchAllPosts, fetchAllThoughts, fetchPost, fetchThought } from '@service/post'
import { Post } from 'type'
import StyledMarkdown from '@styles/styled-markdown'
import Wrapper from './style'
import ThoughtList from './thought-list'
import { promises as fsPromises } from 'fs'
const path = require('path')
interface IProps {
  children?: ReactNode
  thought: Post
  thoughts: any[]
}
type Params = {
  title: string
}
const PostDetail: FC<IProps> = memo((props) => {
  const { thought, thoughts } = props

  return (
    <Layout>
      <Wrapper>
        <StyledMarkdown>
          <Markdown>{thought}</Markdown>
        </StyledMarkdown>
        <div className="post-list">
          <h2 className="post-list-title">Menu</h2>
          <ThoughtList thoughts={thoughts} />
        </div>
      </Wrapper>
    </Layout>
  )
})
export const getStaticPaths: GetStaticPaths = async () => {
  // const res = await fetchAllThoughts()
  const folderPath = path.join(process.cwd(), 'assets/posts/thought')
  const resultAll = await fsPromises.readdir(folderPath)
  return {
    paths: resultAll.map((item, index) => ({
      params: {
        title: item.split('.')[0]
      }
    })),
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async (context) => {
  // const res = await fetchThought(context.params?.title as string)
  // console.log(res, 'res')

  // const resAll = await fetchAllThoughts()
  const filePath = path.join(process.cwd(), 'assets/posts/thought', context.params?.title)
  const result = await fsPromises.readFile(filePath + '.md')
  const folderPath = path.join(process.cwd(), 'assets/posts/thought')
  const resultAll = await fsPromises.readdir(folderPath)
  return {
    props: {
      thought: result.toString(),
      thoughts: resultAll
    }
  }
}
export default PostDetail

PostDetail.displayName = 'PostDetail'
