import styled from 'styled-components'
import { architectsDaughter } from '@styles/fonts'
import { fixed, mobile } from '@styles/mixins'
type Props = {
  open?: boolean
}
const Wrapper = styled.div<Props>`
  z-index: 3;
  width: 400px;
  height: 100vh;
  ${fixed('0', '0')}
  font-family: ${architectsDaughter.style.fontFamily};
  font-size: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
  transition: all 500ms ease;
  @media (max-width: 820px) {
    transform: ${({ open }) => (open ? 0 : 'translateX(-230px)')};
  }
  ${mobile(`width: 230px;`)}
  .menu-item {
    cursor: pointer;
    margin: 0 -200px 15px;
    text-indent: 118px;
    &:hover,
    &.active {
      background-color: rgba(255, 255, 255, 0.4);
    }
    ${mobile(`
      margin: 0 -115px 10px;
      text-indent: 50px;
    `)}
    a {
      display: block;
    }
  }
`
export default Wrapper
