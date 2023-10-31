import React, { memo, useEffect, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import Wrapper from './style'
import Layout from '@component/layout'
import Title from '@component/title'
import Code from '@component/code'
import CodePreview from '@component/code-preview'
import Image from 'next/image'
import Mask from '@component/mask'
import Close from '@component/close'
import { useState } from 'react'
import DownArrow from '@icon/down-arror'
import { useAppDispatch, useAppSelector } from '@hook/redux'

import { updateMaskVisible } from '@store/module/mask'
import Button from '@component/button'
import Refresh from '@icon/refresh'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const Skills: FC<IProps> = memo(() => {
  // Store
  const dispatch = useAppDispatch()
  const { maskvisible, device, deviceWidth } = useAppSelector(
    (state) => ({
      maskvisible: state.mask.visible,
      device: state.device.device,
      deviceWidth: state.device.width
    }),
    shallowEqual
  )
  // States
  const [previewTemp, setPreviewTemp] = useState('html')
  const [transformState, setTransformState] = useState(false)
  const [resumeVisible, setResumeVisible] = useState(false)
  const [imageSize, setImageSize] = useState(200)

  // Refs
  const spaRef = useRef<HTMLDivElement>(null)

  // Effects

  // useEffect(() => {
  //   const contentTop = spaRef.current!.getBoundingClientRect().top
  //   const scrollFn = () => {
  //     const isCentered = useCheckContentInScreen(contentTop)
  //   }
  //   window.addEventListener('scroll', scrollFn)
  //   return () => {
  //     window.removeEventListener('scroll', scrollFn)
  //   }
  // })
  useEffect(() => {
    if (transformState === true) {
      setTimeout(() => {
        setResumeVisible(true)
      }, 3000)
    }
  }, [transformState])

  useEffect(() => {
    if (device === 'mobile') {
      setImageSize(100)
    }
  }, [device])

  // Handler
  const closeClickHandler = () => {
    dispatch(updateMaskVisible(false))
  }
  const codePreviewClickHandler = (type: string) => {
    setPreviewTemp(type)
    dispatch(updateMaskVisible(true))
  }
  const transformClickHandler = () => {
    setTransformState(true)
  }
  const resumeClickHandler = () => {
    setTransformState(false)
    setResumeVisible(false)
  }

  return (
    <Layout>
      <Wrapper transformState={transformState}>
        <section className="section">
          <Title>Basic Stucture</Title>
          <div className="content">
            I can develop a website using basic skills such as <Code>HTML, CSS, and vanilla JavaScript</Code>
          </div>
          <div className="intro">
            Here are some basic codes
            <span className="gesture">
              <DownArrow width={24} height={24} />
            </span>
          </div>
          <div className="preview-list flex">
            <CodePreview tag="html" onClickHandler={() => codePreviewClickHandler('html')} shake>
              <Image src="/image/basic-html.png" alt="" width={imageSize} height={imageSize} priority={true} />
            </CodePreview>
            <CodePreview tag="css" color="#c60" onClickHandler={() => codePreviewClickHandler('css')} shake>
              <Image src="/image/basic-css.png" alt="" width={imageSize} height={imageSize} priority={true} />
            </CodePreview>
            <CodePreview tag="javascript" color="#699" onClickHandler={() => codePreviewClickHandler('js')} shake>
              <Image src="/image/basic-js.png" alt="" width={imageSize} height={imageSize} priority={true} />
            </CodePreview>
          </div>
          {maskvisible && (
            <>
              <Mask>
                <div className="preview-image flex">
                  <Image src={`/image/basic-${previewTemp}.png`} alt="code-preview" width={600} height={600} />
                  <div className="close-btn-wrapper">
                    <div className="btn" onClick={closeClickHandler}>
                      <Close />
                    </div>
                  </div>
                </div>
              </Mask>
            </>
          )}
        </section>
        <section className="section">
          <Title>SPA - Single Page Application</Title>
          <div className="content">
            Advanced, I can convert a basic structured website (similar to the one above) into a Single Page Application
            using JavaScript frameworks such as <Code>Typescript, Webpack, Redux, React, Vue, and others</Code>
          </div>
          <div className="intro">
            Some basic SPA codes are as follows
            <span className="gesture">
              <DownArrow width={24} height={24} />
            </span>
          </div>
          <div className="preview-list flex spa" ref={spaRef}>
            <CodePreview tag="html" movement="toRight" transformState={transformState} deviceWidth={deviceWidth}>
              <Image src="/image/basic-html.png" alt="" width={imageSize} height={imageSize} priority={true} />
            </CodePreview>
            <CodePreview
              tag="css"
              color="#c60"
              movement="toTransparent"
              transformState={transformState}
              deviceWidth={deviceWidth}
            >
              <Image src="/image/basic-css.png" alt="" width={imageSize} height={imageSize} priority={true} />
            </CodePreview>
            <CodePreview
              tag="javascript"
              color="#699"
              movement="toLeft"
              transformState={transformState}
              deviceWidth={deviceWidth}
            >
              <Image src="/image/basic-js.png" alt="" width={imageSize} height={imageSize} priority={true} />
            </CodePreview>
            <div className="cra flex">
              <CodePreview tag="SPA" color="#699" movement="storm" delay={2000} transformState={transformState}>
                <Image src="/image/basic-spa.png" alt="" width={450} height={450} />
                {resumeVisible && (
                  <div className="resume" onClick={resumeClickHandler}>
                    <Refresh width={80} height={80} />
                  </div>
                )}
              </CodePreview>
            </div>
            {!transformState && (
              <div className="mask">
                <Mask position="absolute">
                  <Button onClick={transformClickHandler}>Click to Transform</Button>
                </Mask>
              </div>
            )}
          </div>
        </section>
        <section className="section">
          <Title>NEXT width SSR - Server Side Rendering</Title>
          <div className="intro">
            The codes are similar to SPA because they are based on React as well.
            <span className="gesture">
              <DownArrow width={24} height={24} />
            </span>
          </div>
          <div className="preview-list flex ssr">
            <CodePreview tag="SSR" onClickHandler={() => codePreviewClickHandler('ssr')} shake>
              <Image src="/image/basic-ssr.png" alt="" width={400} height={400} priority={true} />
            </CodePreview>
          </div>
          {maskvisible && (
            <>
              <Mask>
                <div className="preview-image flex">
                  <Image src={`/image/basic-${previewTemp}.png`} alt="code-preview" width={600} height={600} />
                  <div className="close-btn-wrapper">
                    <div className="btn" onClick={closeClickHandler}>
                      <Close />
                    </div>
                  </div>
                </div>
              </Mask>
            </>
          )}
        </section>
      </Wrapper>
    </Layout>
  )
})

export default Skills

Skills.displayName = 'Skills'
