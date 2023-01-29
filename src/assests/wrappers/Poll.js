import styled from 'styled-components';

const Wrapper = styled.article`
  border: 2px solid #d6d6d6;
  width: 250px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 10px;

  h3 {
    margin: 0.3rem 0;
    font-size: 1.1rem;
    font-weight: 500;
  }

  p {
    border-bottom: 1px solid #d6d6d6;
    margin: 0 0 0.4rem;
    padding-bottom: 10px;
    color: #909090;
    font-size: 0.8rem;
  }

  button {
    width: 90%;
    padding: 0.3rem 0;
    margin-bottom: 0.3rem;
    background-color: #fff;
    border: 1px solid #00bfa6;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default Wrapper;
