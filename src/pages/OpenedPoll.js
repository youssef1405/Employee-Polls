import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Option } from '../components';
import { toast } from 'react-toastify';
import Wrapper from '../assests/wrappers/OpenedPoll';

const OpenedPoll = () => {
  const naviagte = useNavigate();
  const polls = useSelector((state) => state.polls);
  const users = useSelector((state) => state.users.data);
  const user = useSelector((state) => state.users.currentUser.user);

  useEffect(() => {
    if (!user) {
      naviagte('/login');
      toast.warn('Please sign in first!');
      return;
    }
  });

  return (
    polls.openedQuestion && (
      <Wrapper>
        <h2>Poll by {polls.openedQuestion.author}</h2>
        <img src={users[polls.openedQuestion.author].avatarURL} alt='' />

        <h3>Would You Rather</h3>
        <div className='options'>
          <Option
            text={polls.openedQuestion.optionOne.text}
            option='optionOne'
          />
          <Option
            text={polls.openedQuestion.optionTwo.text}
            option='optionTwo'
          />
        </div>
      </Wrapper>
    )
  );
};

export default OpenedPoll;
