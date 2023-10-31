import styled from 'styled-components'

const Wrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 33px;
  height: 33px;
  border: 3px solid #fff;
  border-radius: 33px;
  .left,
  .right {
    position: absolute;
    left: 0;
    top: 14px;
    width: 100%;
    height: 3px;
    background-color: #fff;
    transform: translateY(50%) rotate(45deg);
  }
  .right {
    top: 15px;
    transform: rotate(-45deg);
  }
`
export default Wrapper
