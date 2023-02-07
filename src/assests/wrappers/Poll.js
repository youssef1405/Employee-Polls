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

  a {
    width: 90%;
    display: block;
    text-decoration: none;
    padding: 0.3rem 0;
    margin: 0.3rem auto;
    background-color: #fff;
    border-radius: 5px;
    background-color: #4e4e4e;
    color: #fff;
    font-weight: 500;
    &:hover {
      background-color: #2e2e2e;
    }
  }
`;

export default Wrapper;
