import styled from 'styled-components';

const NewPoll = () => {
  return (
    <Wrapper>
      <h2>Would you Rather</h2>
      <p>Create Yor Own Poll</p>
      <form>
        <div>
          <label htmlFor=''>First Option</label>
          <input type='text' placeholder='Option One' />
        </div>
        <div>
          <label htmlFor=''>Second Option</label>
          <input type='text' placeholder='Option Two' />
        </div>
        <button>Create</button>
      </form>
    </Wrapper>
  );
};

// #4e4e4e

const Wrapper = styled.section`
  text-align: center;

  h2 {
    margin-bottom: 0.3rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 2rem;
  }
  h2,
  p {
    color: #4e4e4e;
  }

  form {
    width: 80%;
    margin: 0 auto;
    max-width: 500px;
    border: 1px solid #d6d6d6;
    padding: 1rem;
    border-radius: 5px;
  }

  div {
    display: flex;
    flex-direction: column;
    label {
      margin-bottom: 0.3rem;
      font-weight: 500;
      font-size: 0.95rem;
    }
    input {
      margin-bottom: 1rem;
      border: 1px solid #d6d6d6;
      padding: 0.5rem;
      border-radius: 8px;
      color: #4e4e4e;
    }
  }

  button {
    width: 7.5rem;
    padding: 0.6rem 0;
    background-color: #61a266;
    color: #fff;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
`;
export default NewPoll;
