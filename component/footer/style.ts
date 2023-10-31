import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 20px;
  text-align: center;

  .container {
    margin: 0 auto;
  }

  nav ul {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  nav li {
    margin: 0 10px;
    &:hover {
      text-decoration: underline;
    }
  }

  /* Media Query for screens narrower than 820px */
  @media (max-width: 820px) {
    padding: 10px;

    .container {
      max-width: 100%;
      margin: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    nav {
      flex-basis: 100%;
      text-align: center;
    }

    nav ul {
      display: inline-block;
    }

    nav li {
      display: inline-block;
      margin: 0 10px;
    }

    nav a {
      font-size: 14px;
    }
  }
`
export default Wrapper
