import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  margin: 2rem auto;
  h1 {
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    max-width: 400px;
    margin-bottom: 3rem;
  }
  form {
    background-color: #00bfa6;
    width: 100%;
    padding: 1rem;
  }
`;

export default Wrapper;
