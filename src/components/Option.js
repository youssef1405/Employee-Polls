import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changePollStatus, addAnswer } from '../store';
import { VscCheck } from 'react-icons/vsc';

const Option = ({ text, option }) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.polls.openedQuestion);
  const { user } = useSelector((state) => state.users.currentUser);
  const { answers } = useSelector((state) => state.users.data[user]);

  const handleClick = () => {
    dispatch(changePollStatus({ id, user, option }));
    dispatch(addAnswer({ qid: id, option }));
  };

  return (
    <Wrapper>
      <p>
        {text}
        {answers[id] && option === answers[id] ? (
          <VscCheck className='selected' />
        ) : (
          ''
        )}
      </p>
      <button onClick={handleClick} disabled={answers[id]}>
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

  p {
    font-size: 0.9rem;
    margin: 0;
    padding: 0.6rem 0;
    /* height: 3rem; */
  }
  .selected {
    background-color: #00b0ff;
    font-size: 1rem;
    border-radius: 50%;
    color: #fff;
    padding: 0.1rem;
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
