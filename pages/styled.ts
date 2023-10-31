import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  .enter-key {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  .down {
    position: absolute;
    right: 20px;
    top: 50px;
    align-self: flex-end;
    .tag {
      top: -21px;
      left: -50px;
    }
  }
  .link-wrap {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    padding: 0 20px;
    .link {
      text-decoration: underline;
      color: #555;
      text-indent: 0;
      line-height: normal;
      &:hover {
        color: #000;
      }
    }
  }
`
export default Wrapper
