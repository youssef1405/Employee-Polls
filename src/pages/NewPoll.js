import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { savePoll, addPoll } from '../store';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const NewPoll = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const [optionOneText, setOptionOne] = useState('');
  const [optionTwoText, setOptionTwo] = useState('');

  const author = useSelector((state) => state.users.currentUser.user);
  console.log(author);
  const polls = useSelector((state) => state.polls.data);

  // const questions = useSelector((state) => state.users.data[author].questions);
  const users = useSelector((state) => state.users.data);

  const poll =
    users && polls.find((poll) => users[author].questions.includes(poll.id)); // newly

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(savePoll({ author, optionOneText, optionTwoText }));
    console.log(poll.id);
    dispatch(addPoll(poll.id));
    naviagte('/');
  };

  useEffect(() => {
    if (!author) {
      naviagte('/login');
      toast.warn('Please sign in first!');
      return;
    }
  });

  return (
    <Wrapper>
      <h2>Would you Rather</h2>
      <p>Create Yor Own Poll</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor=''>First Option</label>
          <input
            type='text'
            placeholder='Option One'
            value={optionOneText}
            onChange={(e) => setOptionOne(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor=''>Second Option</label>
          <input
            type='text'
            placeholder='Option Two'
            value={optionTwoText}
            onChange={(e) => setOptionTwo(e.target.value)}
          />
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
      color: #4e4e4e;
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
