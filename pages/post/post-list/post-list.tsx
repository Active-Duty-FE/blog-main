import React, { memo, useEffect, useReducer, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './style'
import Link from 'next/link'

interface IProps {
  children?: ReactNode
  posts: any[]
}

const PostList: FC<IProps> = memo(({ posts }) => {
  return (
    <Wrapper>
      <ul className="post-list">
        {posts &&
          posts.map((item: string) => (
            <li className="item" key={item}>
              <Link href={`/post/${item.split('.')[0]}`}>{item.split('.')[0]}</Link>
              <div className="line"></div>
            </li>
          ))}
      </ul>
    </Wrapper>
  )
})

export default PostList

PostList.displayName = 'PostList'
