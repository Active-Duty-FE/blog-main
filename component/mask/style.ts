import { absolute, fixed } from '@styles/mixins'
import styled from 'styled-components'
interface IProps {
  position?: 'fixed' | 'absolute'
  blur?: number
  index?: number
}
const Wrapper = styled.div<IProps>`
  z-index: ${({ index }) => index ?? 4};
  ${fixed('0', '0', 'unset', 'unset')}
  ${({ position }) => position && position === 'absolute' && absolute('0', '0', 'unset', 'unset')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, ${({ blur }) => (blur !== undefined ? blur : 0.2)});
  img {
    width: auto;
    height: auto;
  }
`
export default Wrapper
