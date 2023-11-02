import React, { Fragment, memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper, { StyledLink } from './styled'
import Layout from '@component/layout'
import Title from '@component/title'
import Slider, { Settings } from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Ultra } from 'next/font/google'
import ListItem from '@component/list-item'
import List from '@component/list'
import Table from '@component/table'
import { skillList } from './skill-data'
import Link from 'next/link'
interface IProps {
  children?: ReactNode
}

const Profile: FC<IProps> = memo(() => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: true,
    customPaging: (i) => (
      <div
        style={{
          width: '30px',
          color: '#999'
        }}
      >
        {i + 1}
      </div>
    )
  }
  const [first, setFirst] = useState(false)
  const [second, setSecond] = useState(false)
  const [third, setThird] = useState(false)
  const [fourth, setFourth] = useState(false)
  const afterChange = (currentSlide: number) => {
    switch (currentSlide) {
      case 0:
        setFirst(true)
        setSecond(false)
        setThird(false)
        setFourth(false)
        break
      case 1:
        setFirst(false)
        setSecond(true)
        setThird(false)
        setFourth(false)

        break
      case 2:
        setFirst(false)
        setSecond(false)
        setThird(true)
        setFourth(false)

        break
      case 3:
        setFirst(false)
        setSecond(false)
        setThird(false)
        setFourth(true)
        break
      default:
        break
    }
  }
  useEffect(() => {
    setFirst(true)
  }, [])
  return (
    <Layout>
      <Wrapper>
        <div className="content">
          <Title>Professional Skills</Title>
          <Table>
            <table className="basic-table">
              <caption>professional skills</caption>
              <colgroup>
                <col width={200} />
                <col width="auto" />
              </colgroup>
              <tbody>
                {skillList.map((item) => (
                  <Fragment key={item.label}>
                    <tr>
                      <th>{item.label}</th>
                      <td>
                        {item.skills.map((item, index) => (
                          <StyledLink key={item.name} href={item.website} target="blank">
                            {index !== 0 && ' '} {item.name}
                            <span className="line"></span>
                          </StyledLink>
                        ))}
                      </td>
                    </tr>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </Table>
        </div>
      </Wrapper>
    </Layout>
  )
})

export default Profile

Profile.displayName = 'Profile'
