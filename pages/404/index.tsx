import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './style'
import Image from 'next/image'
import { useRouter } from 'next/router'

interface IProps {
  children?: ReactNode
}

const NotFound: FC<IProps> = memo(() => {
  // Router
  const router = useRouter()
  // Handler
  const goBackClickHandler = () => {
    router.back()
  }
  return (
    <Wrapper className="background flex">
      <div className="back" onClick={goBackClickHandler}>
        <span>GO BACK</span>
      </div>
      <h2 className="title">Sorry , Page Not Found - 404</h2>
      <div className="image">
        <Image src="/image/404.png" width={200} height={200} alt="404 page" />
      </div>
    </Wrapper>
  )
})

export default NotFound

NotFound.displayName = 'NotFound'
