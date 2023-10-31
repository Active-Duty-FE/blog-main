import { mobile } from '@styles/mixins'
import styled from 'styled-components'

const StyledMarkdown = styled.div`
  > * {
    margin: 10px 0;
  }
  h4 {
    opacity: 0;
    transition: all 500ms;
    &:hover {
      opacity: 1;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 15px 0;
  }
  h1 {
    font-size: 33px;
  }
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 26px;
  }
  h4 {
    font-size: 22px;
  }
  h5 {
    font-size: 18px;
  }
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  pre {
    padding: 10px;
    border: 1px solid #fff;
    border-color: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    background: #000;
  }
  code {
    white-space: pre-wrap;
  }
  blockquote {
    position: relative;
    padding-left: 20px;
    overflow: hidden;
    > * {
      margin: 10px 0;
    }
    &::first-child {
      margin: 0;
    }
    &::last-child {
      margin: 0;
    }
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 3px;
      height: 500px;
      background-color: #d3d3d3;
    }
  }
`
export default StyledMarkdown
