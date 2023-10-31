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
  const res = await fetchAllPosts()
  return {
    paths: res.data.map((item) => ({
      params: {
        title: item.split('.')[0]
      }
    })),
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetchPost(context.params?.title as string)
  console.log(res, 'res')

  const resAll = await fetchAllPosts()
  return {
    props: {
      post: res.data,
      posts: resAll.data
    }
  }
}
export default PostDetail

PostDetail.displayName = 'PostDetail'
