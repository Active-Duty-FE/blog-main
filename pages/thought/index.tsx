import { fetchAllThoughts } from '@service/post'
import { GetStaticProps } from 'next'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import ThoughtList from './thought-list'
import Layout from '@component/layout'

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
  const res = await fetchAllThoughts()
  console.log(res, 'res')

  return {
    props: {
      thoughts: res.data
    }
  }
}
export default Thought

Thought.displayName = 'Thought'
