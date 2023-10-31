import { css } from 'styled-components'
import { roboto } from './fonts'
const variables = css`
  :root {
    --font: ${roboto.style.fontFamily};
    --mb-24: 24px;
    --font-md: 24px;
    --theme-bg: #d4d4d4;
  }
`
export default variables
