import styled from 'styled-components'
import '@styles/globals'
import { absolute, mobile } from '@styles/mixins'
interface IProps {
  transformState?: boolean
}
const Wrapper = styled.div<IProps>`
  .section {
    margin-bottom: 30px;
  }

  .intro {
    margin-top: 24px;
    font-size: 24px;
    .gesture {
      display: inline-block;
      margin-left: 6px;
      animation: bounce 2000ms ease-in-out infinite;
      text-indent: 0;
    }
  }
  .preview-image {
    position: relative;
    ${mobile(`width: 70%;`)}
    .close-btn-wrapper {
      z-index: 3;
      position: absolute;
      right: -19px;
      top: -19px;
      @keyframes close-rotate {
        from {
          transform: rotate(0);
        }
        to {
          transform: rotate(360deg);
        }
      }
      .btn {
        &:hover {
          animation: close-rotate 500ms linear infinite;
        }
      }
    }
  }
  .preview-list {
    margin-top: 24px;
    justify-content: flex-start;
    &.spa {
      position: relative;
      justify-content: flex-start;
      margin-top: ${({ transformState }) => (transformState ? 130 : 24)}px;
      margin-bottom: ${({ transformState }) => (transformState ? 130 : 24)}px;
      @media (max-width: 820px) {
        margin-top: ${({ transformState }) => (transformState ? 58 : 36)}px;
        margin-bottom: ${({ transformState }) => (transformState ? 58 : 36)}px;
      }
      .cra {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 800px;
        ${mobile(`width: 80%;`)}
        transform: translate(-50%, -50%);
      }
    }
    &.ssr {
      justify-content: center;
    }
  }
  .preview-layer {
    display: none;
  }
  .resume {
    cursor: pointer;
    ${absolute('50%', '50%', 'unset', 'unset')}
    transform: translate(-50%, -50%);
    &:hover {
      img {
        transform: rotate(-90deg);
        transition: all 250ms linear;
      }
    }
  }
`

export default Wrapper
