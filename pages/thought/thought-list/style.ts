import { mobile } from '@styles/mixins'
import styled from 'styled-components'

const Wrapper = styled.div`
  @keyframes flash {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
      transform: scale(1);
    }
  }
  min-width: 100%;
  ul.post-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    .item {
      cursor: pointer;
      position: relative;
      width: 40%;
      margin: 0 2px 15px 4%;
      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
      a {
        cursor: pointer;
        display: block;
        padding: 10px;
      }
      &:hover {
        .line {
          animation: flash 500ms ease forwards;
        }
      }
    }
    .line {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 3px;
      background-color: #d3d3d3;
      transform-origin: 0 0;
      transform: scale(0);
    }
  }
`
export default Wrapper
