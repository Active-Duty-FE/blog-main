import { createGlobalStyle } from 'styled-components'
import { fixed } from './mixins'
import variables from './variables'
const GlobalStyle = createGlobalStyle`
  ${variables}
  * {
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #d3d3d3;
  }
  ul, li {
    list-style: none;
  }

  html, code {
    font-family: var(--font);
    color: #d3d3d3;
    
  }
  img {
    max-width: 100%;
  }
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;
    &.flex-start {
      justify-content: flex-start;
    }
    &.direction-column {
      flex-direction: column;
    }
    &.align-start {
      align-items: start;
    }
  }
  .indent-full {
    text-indent: -9999px;
  }
  .content-wrap {
    max-width: 1100px;
  }
  .content {
    box-sizing: border-box;
    margin-top: 32px;
    padding: 24px 32px;
    font-size: 18px;
    line-height: 1.5;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .background {
    ${fixed('0', '0', 'unset', 'unset')};
    z-index: -1;
    width: 100%;
    height: 100%;
    background: url('/image/layout-bg.jpg') no-repeat;
    background-size: 100% 100%;
  }
  .mt-8 {
    margin-top: 8px;
  }
  .mt-16 {
    margin-top: 16px;
  }
  @keyframes shake {
    0% {
      transform: rotate(-2deg);
    }
    10% {
      transform: rotate(2deg);
    }
    20% {
      transform: rotate(-2deg);
    }
    30% {
      transform: rotate(2deg);
    }
    40% {
      transform: rotate(-2deg);
    }
    50% {
      transform: rotate(2deg);
    }
    60% {
      transform: rotate(-1deg);
    }
    70% {
      transform: rotate(1deg);
    }
    80% {
      transform: rotate(-1deg);
    }
    90% {
      transform: rotate(1deg);
    }
    100% {
      transform: rotate(0);
    }
  }
  @keyframes bounce {
    0% {
      transform: translateY(-3px);
    }
    25% {
      transform: translateY(3px);
    }
    50% {
      transform: translateY(-3px);
    }
    75% {
      transform: translateY(3px);
    }
    100% {
      transform: translateY(-3px);
    }
  }
  @keyframes bounce3d {
    0% {
      transform: translateY(-2px rotate3d(53, -9, 6, 65deg));
    }
    25% {
      transform: translateY(2px) rotate3d(53, -9, 6, 65deg);
    }
    50% {
      transform: translateY(-2px) rotate3d(53, -9, 6, 65deg);
    }
    75% {
      transform: translateY(2px) rotate3d(53, -9, 6, 65deg);
    }
    100% {
      transform: translateY(0px) rotate3d(53, -9, 6, 65deg);
    }
  }
`
export default GlobalStyle
