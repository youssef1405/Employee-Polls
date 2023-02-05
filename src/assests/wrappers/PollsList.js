import styled from 'styled-components';

const Wrapper = styled.section`
  text-align: center;
  width: 60%;
  margin: 2rem auto;

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
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    border: 1px solid #d6d6d6;
    padding: 1rem;
  }
`;

export default Wrapper;
