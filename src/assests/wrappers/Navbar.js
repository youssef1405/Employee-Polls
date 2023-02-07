import styled from 'styled-components';

const Wrapper = styled.nav`
  background-color: #fff;
  padding: 0.5rem 1rem;
  margin-bottom: 3rem;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
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
    color: #4e4e4e;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
      /* color: #b7b7b7; */
      color: #2e2e2e;
    }
  }

  .user-item {
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 0.8rem;
      color: #3452eb;
      font-weight: 500;
    }
  }

  .avatar {
    width: 25px;
  }
`;

export default Wrapper;
