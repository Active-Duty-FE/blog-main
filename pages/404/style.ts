import styled from 'styled-components'
import { RubikIso } from '@styles/fonts'
import '@styles/globals'
const Wrapper = styled.div`
  flex-direction: column;
  font-family: ${RubikIso.style.fontFamily};
  .back {
    cursor: pointer;
    font-size: var(--mb-md);
    margin-bottom: var(--mb-24);
    animation: bounce 1500ms ease-in-out infinite;
  }
  .image {
    overflow: hidden;
    border-radius: 16px;
  }
  .title {
    margin-bottom: var(--mb-24);
    font-size: var(--mb-md);
  }
`
export default Wrapper
