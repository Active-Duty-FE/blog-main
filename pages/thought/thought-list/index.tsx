import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './style'
import Link from 'next/link'
import Image from 'next/image'
import useDevice from '@hook/device'
interface IProps {
  children?: ReactNode
  thoughts: any[]
}

const ThoughtList: FC<IProps> = memo(({ thoughts }) => {
  const device = useDevice()
  return (
    <Wrapper>
      <ul className="post-list">
        {thoughts &&
          thoughts?.map((item, index) => (
            <li key={item} className="item">
              <Link href={`/thought/${item.split('.')[0]}`}>
                <Image src={`/thought-image/${item.split('.')[0]}.jpeg`} alt={item} width={1000} height={300} />
              </Link>
              <div className="line"></div>
            </li>
          ))}
      </ul>
    </Wrapper>
  )
})

export default ThoughtList

ThoughtList.displayName = 'ThoughtList'
