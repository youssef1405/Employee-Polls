import styled from 'styled-components';
const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  max-width: 900px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  color: #4e4e4e;

  header {
    display: flex;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    border: 1px solid #d6d6d6;
    text-align: center;
    padding: 0.3rem 0;

    p {
      margin: 0;
    }
    .username {
      font-size: 0.9rem;
      color: #3452eb;
    }
  }

  .user {
    display: flex;
    gap: 10px;
    padding-left: 10px;
    align-items: center;
    img {
      width: 40px;
      border-radius: 50%;
    }
    div {
      border: none;
    }
  }

  .header {
    background-color: #61a266;
    color: #fff;
    font-weight: 500;
    font-size: 1.1rem;
    padding: 1rem 0.5rem;
  }
`;

export default Wrapper