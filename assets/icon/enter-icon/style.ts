import styled from 'styled-components'
import '@styles/globals'

const Wrapper = styled.div`
  position: relative;
  .icon {
    cursor: pointer;
    position: relative;
    z-index: 2;
    width: 150px;
    transform: rotate3d(53, -9, 6, 65deg);
    animation: bounce3d 3000ms linear infinite;
  }
  [class*='mattress-'] {
    z-index: 1;
    position: absolute;
    border-radius: 0 0 3px 8px;
    text-indent: -9999px;
    background-color: #000;
  }
  .mattress-bottom {
    top: 88px;
    left: 17px;
    width: 100px;
    height: 25px;
  }
  .mattress-right {
    top: 62px;
    right: 23px;
    width: 13px;
    height: 51px;
    transform: rotate(23deg);
  }
  .mattress-edge {
    top: 60px;
    right: 14px;
    width: 4px;
    height: 8px;
  }
`
export default Wrapper
