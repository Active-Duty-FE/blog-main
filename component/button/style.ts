import styled from 'styled-components'

const Wrapper = styled.div`
  cursor: pointer;
  overflow: hidden;
  position: relative;
  display: inline-block;
  padding: 4px 7px;
  line-height: 24px;
  color: #fff;
  background: linear-gradient(to bottom right, orange, green);
  box-shadow: 1px 1px 4px #fff;
  text-shadow: #000 1px 0 5px;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: -254px;
    width: 3px;
    height: 500px;
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 4px rgba(255, 255, 255);
    transform: rotate(60deg);
  }
  &:hover {
    animation: twistColor 500ms ease-in-out forwards;
    &:after {
      animation: shining 500ms ease-in-out forwards;
    }
  }
  @keyframes shining {
    to {
      top: -50px;
    }
  }
  @keyframes twistColor {
    to {
      background-image: linear-gradient(to bottom right, orange, green);
    }
  }
`
export default Wrapper
