import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { savePoll, addPoll } from '../store';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from '../assests/wrappers/NewPoll';
import { Loading } from '../components';

const NewPoll = () => {
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const [optionOneText, setOptionOne] = useState('');
  const [optionTwoText, setOptionTwo] = useState('');

  const author = useSelector((state) => state.users.currentUser.user);
  const polls = useSelector((state) => state.polls.data);
  const users = useSelector((state) => state.users.data);
  const { isLoading } = useSelector((state) => state.polls);
  console.log(isLoading);

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

  // if (isLoading) {
  //   console.log('loading');
  //   return <Loading />;
  // }

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

export default NewPoll;
