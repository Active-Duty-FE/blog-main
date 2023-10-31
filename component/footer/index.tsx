import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './style'

interface IProps {
  children?: ReactNode
}

const Footer: FC<IProps> = memo(() => {
  return (
    <Wrapper>
      <footer>
        <div className="container content-wrap">
          <p>&copy; 2023 Hyang. All Rights Reserved.</p>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/profile">Profile</a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </Wrapper>
  )
})

export default Footer

Footer.displayName = 'Footer'
