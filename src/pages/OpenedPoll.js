import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Option } from '../components';
import Wrapper from '../assests/wrappers/OpenedPoll';
import Error from './Error';

const OpenedPoll = () => {
  const { questionId } = useParams();
  const polls = useSelector((state) => state.polls.data);
  const users = useSelector((state) => state.users.data);

  const openedQuestion = polls.find((poll) => poll.id === questionId);


  if (!openedQuestion) {
    return <Error />;
  } else {
    return (
      <Wrapper>
        <h2>Poll by {openedQuestion.author}</h2>
        <img src={users[openedQuestion.author].avatarURL} alt='' />

        <h3>Would You Rather</h3>
        <div className='options'>
          <Option text={openedQuestion.optionOne.text} option='optionOne' />
          <Option text={openedQuestion.optionTwo.text} option='optionTwo' />
        </div>
      </Wrapper>
    );
  }
};

export default OpenedPoll;
