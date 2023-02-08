import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changePollStatus, addAnswer } from '../store';
import { VscCheck } from 'react-icons/vsc';

const Option = ({ text, option }) => {
  const dispatch = useDispatch();
  const question = useSelector((state) => state.polls.openedQuestion);
  const polls = useSelector((state) => state.polls.data);
  const { user } = useSelector((state) => state.users.currentUser);
  const { answers } = useSelector((state) => state.users.data[user]);
  const selected = answers[question.id] && option === answers[question.id];

  const handleClick = () => {
    dispatch(addAnswer({ qid: question.id, option }));
    dispatch(changePollStatus({ id: question.id, user, option }));
  };

  const answeredQuestions = polls.find((poll) => poll.id === question.id);
  const totalPollVotes =
    answeredQuestions['optionOne'].votes.length +
    answeredQuestions['optionTwo'].votes.length;

  return (
    <Wrapper>
      {selected && (
        <div className='stats'>
          <span>{answeredQuestions[option].votes.length} voted</span>
          <VscCheck className='selected' />
          <span>
            {(
              (answeredQuestions[option].votes.length / totalPollVotes) *
              100
            ).toFixed()}
            %
          </span>
        </div>
      )}

      <p>{text}</p>

      <button
        data-testid='vote-button'
        onClick={handleClick}
        disabled={answers[question.id]}
      >
        Vote
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 1px solid #d6d6d6;
  width: 350px;
  text-align: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .stats {
    display: flex;
    gap: 7rem;
    align-items: center;
  }

  p {
    font-size: 0.9rem;
    margin: 0;
    padding: 0.6rem 0;
  }
  .selected {
    color: #fff;
    background-color: #3452eb;
    border-radius: 50%;
    padding: 2px;
    margin-top: 5px;
  }

  button {
    width: 100%;
    border: none;
    padding: 0.7rem 0;
    background-color: #61a266;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
  }
`;

export default Option;
