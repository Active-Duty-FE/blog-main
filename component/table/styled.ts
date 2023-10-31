import styled from 'styled-components'
type IProps = {}
const Wrapper = styled.div<IProps>`
  .basic-table {
    border-collapse: collapse;
    caption {
      opacity: 0;
      visibility: none;
      line-height: 0;
      font-size: 0;
    }
    th,
    td {
      padding: 5px 7px;
      border: 1px solid #d3d3d3;
    }
    td {
    }
  }
`
export default Wrapper
