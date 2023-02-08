import styled from 'styled-components';
const Wrapper = styled.div`
  border: 1px solid #d6d6d6;
  width: 350px;
  text-align: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .stats {
    display: flex;
    gap: 7rem;
    align-items: center;
  }

  p {
    font-size: 0.9rem;
    margin: 0;
    padding: 0.6rem 0;
  }
  .icons {
    color: #fff;

    border-radius: 50%;
    padding: 2px;
    margin-top: 5px;
  }

  .yes {
    background-color: #3452eb;
  }

  .no {
    background-color: tomato;
  }

  button {
    width: 100%;
    border: none;
    padding: 0.7rem 0;
    background-color: #61a266;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
  }
`;

export default Wrapper;
