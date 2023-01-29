import styled from 'styled-components';

const Poll = ({ author, timestamp }) => {
  return (
    <Wrapper>
      <h3>{author}</h3>
      <p>{timestamp}</p>
      {/* <hr /> */}
      <button>Show</button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  border: 1px solid #d6d6d6;
  width: 300px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 10px;
  /* display: flex; */
  /* flex-direction: column;
  align-items: center; */
  hr {
    background-color: #d6d6d6;
    border: none;
    height: 1px;
  }

  h3 {
    margin: 0.3rem 0;
  }

  p {
    border-bottom: 1px solid #d6d6d6;
    margin: 0 0 0.4rem;
    padding-bottom: 10px;
    color: #909090;
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

export default Poll;
