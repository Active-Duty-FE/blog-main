import { absolute } from '@styles/mixins'
import '@styles/globals'
import styled from 'styled-components'
import type { Movement } from 'type'

interface IProps {
  shake?: boolean
  movement?: Movement
  delay?: number
  transformState?: boolean
  deviceWidth?: number
}
const Wrapper = styled.div<IProps>`
  position: relative;
  display: inline-block;
  margin: 18px;
  img {
    width: auto;
    height: auto;
  }
  .preview {
    ${({ shake }) =>
      shake &&
      `cursor: pointer;
  }`};
  }
  ${({ shake }) =>
    shake &&
    `&:hover {
    animation: shake linear 500ms;
  }`};
  ${({ movement }) => movement === 'storm' && `opacity: 0;`}
  ${({ movement, transformState }) => movement && transformState && ` animation: ${movement} linear 2000ms forwards`};
  .tag {
    ${absolute('-15px', '-20px')}
    height: 24px;
    padding: 3px 8px;
    box-sizing: border-box;
    background-color: ${({ color }) => (color ? color : '#390')};
    transform: rotate(-30deg);
    &::before {
      content: '';
      ${absolute('-11px', '0')};
      border: 12px solid ${({ color }) => (color ? color : '#390')};
      border-left-color: transparent;
      border-left-width: 6px;
      border-right-width: 6px;
    }
    &::after {
      content: '';
      ${absolute('unset', '0', '-11px', 'unset')}
      border: 12px solid ${({ color }) => (color ? color : '#390')};
      border-right-color: transparent;
      border-left-width: 6px;
      border-right-width: 6px;
    }
  }

  @keyframes toRight {
    80% {
      opacity: 0.5;
    }
    100% {
      transform: translateX(${({ deviceWidth }) => (deviceWidth! < 820 ? deviceWidth! * 0.35 : 282)}px);
      opacity: 0;
    }
  }
  @keyframes toLeft {
    80% {
      opacity: 0.5;
    }
    100% {
      transform: translateX(${({ deviceWidth }) => (deviceWidth! < 820 ? -deviceWidth! * 0.35 : -282)}px);
      opacity: 0;
    }
  }
  @keyframes toTransparent {
    80% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes storm {
    0% {
      opacity: 0.1;
      transform: rotate(0deg) scale(0.1);
    }
    50% {
      opacity: 0.5;
      transform: rotate(3600deg) scale(1);
    }
    98% {
      opacity: 0.5;
      transform: rotate(7200deg) scale(1.5);
    }
    100% {
      opacity: 1;
      transform: rotate(7200deg) scale(1);
    }
  }
`
export default Wrapper
