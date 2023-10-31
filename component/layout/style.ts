import styled from 'styled-components'
import { fixed, mobile } from '@styles/mixins'

const Wrapper = styled.div`
  padding-left: 400px;
  padding-top: 100px;
  margin: 0 24px;
  ${mobile(`
    padding-left: 0;
    padding-top: 70px;
    margin: 0 18px;
  `)}

  .hamburger-menu {
    cursor: pointer;
    z-index: 555;
    ${fixed('20px', '20px')}
  }
`
export default Wrapper
