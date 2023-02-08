import styled from 'styled-components';

const Wrapper = styled.section`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  button {
    width: 48%;
    padding: 1rem 0.5rem;
    background-color: #7e7e7e;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      background-color: #2e2e2e;
    }
  }

  .active-btn {
    background-color: #2e2e2e;
  }
`;

export default Wrapper