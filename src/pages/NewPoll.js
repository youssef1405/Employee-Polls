import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { savePoll, addPoll } from '../store';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from '../assests/wrappers/NewPoll';

const NewPoll = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const [optionOneText, setOptionOne] = useState('');
  const [optionTwoText, setOptionTwo] = useState('');
  const [isBlank, setIsBlank] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const author = useSelector((state) => state.users.currentUser.user);
  const polls = useSelector((state) => state.polls.data);
  const users = useSelector((state) => state.users.data);

  const poll =
    users && polls.find((poll) => users[author].questions.includes(poll.id)); // newly

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!optionOneText || !optionTwoText) {
      setIsBlank(true);
      setErrorMessage(
        'You must enter the first and second options or You will not be able to create a new poll'
      );
      return;
    }
    setIsBlank(false);
    dispatch(savePoll({ author, optionOneText, optionTwoText }));
    dispatch(addPoll(poll.id));
    naviagte('/');
  };

  useEffect(() => {
    if (!author) {
      naviagte('/login');
      toast.warn('Please sign in first!');
      return;
    }
  }, [author, naviagte]);

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
            className={isBlank ? 'error' : ''}
            data-tesid='optionOne-input'
          />
        </div>
        <div>
          <label htmlFor=''>Second Option</label>
          <input
            type='text'
            placeholder='Option Two'
            value={optionTwoText}
            onChange={(e) => setOptionTwo(e.target.value)}
            className={isBlank ? 'error' : ''}
            data-testid='optionTwo-input'
          />
        </div>
        <button data-testid='new-poll-btn'>Create</button>
        <div data-testid='error-msg' className='error-msg'>
          {isBlank && errorMessage}
        </div>
      </form>
    </Wrapper>
  );
};

export default NewPoll;
