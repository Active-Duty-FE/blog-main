import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Layout from '@component/layout'
import type { GetStaticProps, GetStaticPaths } from 'next'
import Markdown from 'react-markdown'
import { fetchAllPosts, fetchPost } from '@service/post'
import { Post } from 'type'
import StyledMarkdown from '@styles/styled-markdown'
import PostList from './post-list/post-list'
import Wrapper from './style'
import { promises as fsPromises } from 'fs'
const path = require('path')
interface IProps {
  children?: ReactNode
  post: Post
  posts: any[]
}
type Params = {
  title: string
}
const PostDetail: FC<IProps> = memo((props) => {
  const { post, posts } = props

  return (
    <Layout>
      <Wrapper>
        <StyledMarkdown>
          <Markdown>{post}</Markdown>
        </StyledMarkdown>
        <div className="post-list">
          <h2 className="post-list-title">Menu</h2>
          <PostList posts={posts} />
        </div>
      </Wrapper>
    </Layout>
  )
})
export const getStaticPaths: GetStaticPaths = async () => {
  const folderPath = path.join(process.cwd(), 'assets/posts/fe')
  const resultAll = await fsPromises.readdir(folderPath)
  return {
    paths: resultAll.map((item) => ({
      params: {
        title: item.split('.')[0]
      }
    })),
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async (context) => {
  // const res = await fetchPost(context.params?.title as string)
  // const resAll = await fetchAllPosts()
  const filePath = path.join(process.cwd(), 'assets/posts/fe', context.params?.title)
  const result = await fsPromises.readFile(filePath.toString() + '.md')
  const folderPath = path.join(process.cwd(), 'assets/posts/fe')
  const resultAll = await fsPromises.readdir(folderPath)
  return {
    props: {
      post: result.toString(),
      posts: resultAll
    }
  }
}
export default PostDetail

PostDetail.displayName = 'PostDetail'
