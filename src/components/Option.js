import { useDispatch, useSelector } from 'react-redux';
import { changePollStatus, addAnswer } from '../store';
import { VscCheck, VscChromeClose } from 'react-icons/vsc';
import Wrapper from '../assests/wrappers/Option';

const Option = ({ text, option }) => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.polls.openedQuestion);
  const polls = useSelector((state) => state.polls.data);
  const { user } = useSelector((state) => state.users.currentUser);
  const { answers } = useSelector((state) => state.users.data[user]);
  const answered = answers[question.id];
  const selected = answers[question.id] && option === answers[question.id];

  const handleClick = () => {
    dispatch(addAnswer({ qid: question.id, option }));
    dispatch(changePollStatus({ id: question.id, user, option }));
  };

  const answeredQuestion = polls.find((poll) => poll.id === question.id);
  const totalPollVotes =
    answeredQuestion['optionOne'].votes.length +
    answeredQuestion['optionTwo'].votes.length;

  return (
    <Wrapper>
      {answered && (
        <div className='stats'>
          <span className='votes'>
            {answeredQuestion[option].votes.length} voted
          </span>
          {selected ? (
            <VscCheck className='icons yes' />
          ) : (
            <VscChromeClose className='icons no' />
          )}
          <span className='pct'>
            {(
              (answeredQuestion[option].votes.length / totalPollVotes) *
              100
            ).toFixed()}
            %
          </span>
        </div>
      )}

      <p>{text}</p>

      <button onClick={handleClick} disabled={answers[question.id]}>
        Vote
      </button>
    </Wrapper>
  );
};

export default Option;
