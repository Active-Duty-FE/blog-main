import React, { memo, useEffect, useReducer, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './style'
import Link from 'next/link'
import { Post } from 'type'

interface IProps {
  children?: ReactNode
  posts: Post[]
}

const PostList: FC<IProps> = memo(({ posts }) => {
  return (
    <Wrapper>
      <ul className="post-list">
        {posts &&
          posts.map((item) => (
            <li className="item" key={item.id}>
              <Link href={`/post/${item.id}`}>{item.title}</Link>
              <div className="line"></div>
            </li>
          ))}
      </ul>
    </Wrapper>
  )
})

export default PostList

PostList.displayName = 'PostList'
