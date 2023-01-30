import styled from 'styled-components';

const Option = ({ text }) => {
  return (
    <Wrapper>
      <p>{text}</p>
      <button>Vote</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid #d6d6d6;
  width: 350px;
  text-align: center;
  border-radius: 5px;

  p {
    font-size: 0.9rem;
    margin: 0;
    padding: 0.6rem 0;
    /* height: 3rem; */
  }

  button {
    width: 100%;
    border: none;
    padding: 0.5rem 0;
    background-color: #61a266;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
  }
`;

export default Option;
