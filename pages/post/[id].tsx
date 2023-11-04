import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Layout from '@component/layout'
import type { GetStaticProps, GetStaticPaths } from 'next'
import { fetchAllPosts, fetchPost } from '@service/post'
import { Post } from 'type'
import StyledMarkdown from '@styles/styled-markdown'
import PostList from './post-list/post-list'
import MarkdownIt from 'markdown-it'
import Wrapper from './style'
const path = require('path')
interface IProps {
  children?: ReactNode
  post: Post
  posts: Post[]
}

const PostDetail: FC<IProps> = memo((props) => {
  const { post, posts } = props
  const md = new MarkdownIt()
  const content = md.render(post.content)

  return (
    <Layout>
      <Wrapper>
        <StyledMarkdown dangerouslySetInnerHTML={{ __html: content }}></StyledMarkdown>
        <div className="post-list">
          <h2 className="post-list-title">Menu</h2>
          <PostList posts={posts} />
        </div>
      </Wrapper>
    </Layout>
  )
})
export const getStaticPaths: GetStaticPaths = async () => {
  const resultAll = await fetchAllPosts<Post[]>()

  return {
    paths: resultAll.data.map((item) => ({
      params: {
        id: item.id.toString()
      }
    })),
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async (context) => {
  const result = await fetchPost<Post>(context.params?.id as string)
  const resultAll = await fetchAllPosts<Post[]>()
  return {
    props: {
      post: result.data,
      posts: resultAll.data
    }
  }
}
export default PostDetail

PostDetail.displayName = 'PostDetail'
