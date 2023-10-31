import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './styled'
import Layout from '@component/layout'
import Title from '@component/title'
import Slider, { Settings } from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Ultra } from 'next/font/google'
import ListItem from '@component/list-item'
import List from '@component/list'
import Table from '@component/table'
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
                <tr>
                  <th>Basic</th>
                  <td>HTML, CSS, Javascript, ECMAScript6+, Typescript</td>
                </tr>
                <tr>
                  <th>Style</th>
                  <td>CSS3, LESS, SCSS, styled-components, bootstrap, tailwind-css, Material-UI, Ant Design</td>
                </tr>
                <tr>
                  <th>Framework</th>
                  <td>React, Vue</td>
                </tr>
                <tr>
                  <th>Network</th>
                  <td>XMLHttpRequest, Axios, fetch, react-query, socket-io, protobuf</td>
                </tr>
                <tr>
                  <th>State Management</th>
                  <td>redux, react-redux, reduxjs/toolkit, vuex, pinia[recoil, mobx]</td>
                </tr>
                <tr>
                  <th>Form Control</th>
                  <td>redux, react-redux, reduxjs/toolkit, vuex, pinia[recoil, mobx]</td>
                </tr>
                <tr>
                  <th>Build</th>
                  <td>webpack, vite, babel</td>
                </tr>
                <tr>
                  <th>Back-end</th>
                  <td>HTML, CSS, Javascript, ECMAScript6+, Typescript</td>
                </tr>
                <tr>
                  <th>Server</th>
                  <td>jenkins, aws</td>
                </tr>
                <tr>
                  <th>Collaboration</th>
                  <td>git, slack, figma, zeplin, jira, confluence</td>
                </tr>
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
