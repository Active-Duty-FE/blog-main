import styled from 'styled-components'
type IProp = {
  width: number
  height: number
}
const Wrapper = styled.div<IProp>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 5px;
  text-indent: -9999px;
  background-color: var(--theme-bg);
  .close {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 20px;
    height: 20px;
    &:hover {
      &::before,
      &:after {
        background-color: #fff;
      }
    }
    ::before,
    :after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 3px;
      height: 20px;
      background-color: #000;
      transform: rotate(45deg);
    }
    ::after {
      transform: rotate(-45deg);
    }
  }
`
export default Wrapper
