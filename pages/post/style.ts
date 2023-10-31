import { mobile } from '@styles/mixins'
import styled from 'styled-components'

const Wrapper = styled.div`
  min-width: 100%;
  max-width: 600px;
  .post-list-title {
    padding: 10px;
    margin-top: 20px;
    text-indet: 200px;
  }
  .post-list {
    background-color: rgba(0, 0, 0, 0.3);
  }
`
export default Wrapper
