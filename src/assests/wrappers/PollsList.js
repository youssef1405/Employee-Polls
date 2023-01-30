import styled from 'styled-components';

const Wrapper = styled.section`
  text-align: center;
  width: 90%;
  margin: 1rem auto;

  header {
    border: 1px solid #d6d6d6;
    color: #fff;
    background-color: #61a266;
    h2 {
      margin: 0.5rem 0;
    }
  }

  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    border: 1px solid #d6d6d6;

    padding-top: 1rem;
  }
`;

export default Wrapper;
