import styled from 'styled-components';

const Wrapper = styled.nav`
  /* border: 1px solid #000; */
  padding: 0 1rem;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
  div {
    display: flex;
    gap: 1rem;
  }
  a {
    text-decoration: none;
  }
`;

export default Wrapper;
