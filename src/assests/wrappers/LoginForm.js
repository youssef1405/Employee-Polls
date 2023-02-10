import styled from 'styled-components';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 2rem auto;
  color: #4e4e4e;
  h1 {
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    max-width: 300px;
    margin-bottom: 3rem;
  }
  form {
    background-color: #61a266;
    width: 100%;
    padding: 1rem;
    max-width: 600px;
    border-radius: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    color: #fff;
    margin-bottom: 0.3rem;
    font-weight: 500;
    font-size: 1.1rem;
  }

  input {
    width: 90%;
    margin-bottom: 1rem;
    border: none;
    padding: 0.7rem;
    font-size: 0.9rem;
    border-radius: 5px;
  }
  button {
    display: block;
    width: 90px;
    margin: 0 auto;
    padding: 0.5rem 0;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    background-color: #4e4e4e;
    color: #fff;
    border: none;
    border-radius: 5px;
    &:hover {
      background-color: #fff;
      color: #4e4e4e;
    }
  }

  .invalid {
    color: tomato;
    font-weight: 600;
    font-size: 0.9rem;
    margin-top: 1rem;
  }
`;

export default Wrapper;
