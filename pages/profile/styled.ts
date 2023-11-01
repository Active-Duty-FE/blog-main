import { mobile } from '@styles/mixins'
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
  .basic-table {
    margin-top: 20px;
  }
`
export default Wrapper

export const StyledLink = styled(Link)`
  position: relative;
  &:hover {
    background: linear-gradient(45deg, #abcabc, #6b6bff);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`
