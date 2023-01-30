import styled from 'styled-components';

const Wrapper = styled.nav`
  /* border: 1px solid #000; */
  padding: 1rem;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    padding: 0;
    margin: 0;
  }
  div {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  a {
    text-decoration: none;
  }

  .user-item {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .avatar {
    width: 25px;
  }
`;

export default Wrapper;
