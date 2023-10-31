import Layout from '@component/layout'
import { fetchAllPosts, fetchPost } from '@service/post'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import PostList from './post-list/post-list'
interface IProps {
  children?: ReactNode
  posts: any[]
}

const Post: FC<IProps> = memo(({ posts }) => {
  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  )
})

export default Post

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetchAllPosts()
  console.log(res, 'res')

  return {
    props: {
      posts: res.data
    }
  }
}
Post.displayName = 'Post'
