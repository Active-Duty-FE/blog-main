import { fetchAllThoughts } from '@service/post'
import { GetStaticProps } from 'next'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import ThoughtList from './thought-list'
import Layout from '@component/layout'
import { promises as fsPromises } from 'fs'
import { Post } from 'type'
const path = require('path')
interface IProps {
  children?: ReactNode
  thoughts: any[]
}

const Thought: FC<IProps> = memo(({ thoughts }) => {
  return (
    <Layout>
      <ThoughtList thoughts={thoughts} />
    </Layout>
  )
})
export const getStaticProps: GetStaticProps = async (context) => {
  const resultAll = await fetchAllThoughts<Post[]>()
  // const folderPath = path.join(process.cwd(), 'assets/posts/thought')
  // const resultAll = await fsPromises.readdir(folderPath)
  return {
    props: {
      thoughts: resultAll.data
    }
  }
}
export default Thought

Thought.displayName = 'Thought'
