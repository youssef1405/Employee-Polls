import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { togglePolls } from '../store';

const ToggleQuestions = ({ show }) => {
  const dispatch = useDispatch();
  const { isShowingNewPolls } = useSelector((state) => state.polls);

  console.log(isShowingNewPolls);
  return (
    <Wrapper>
      <button
        className={isShowingNewPolls && 'active-btn'}
        onClick={() => dispatch(togglePolls(true))}
      >
        Show New Polls
      </button>
      <button
        className={!isShowingNewPolls && 'active-btn'}
        onClick={() => dispatch(togglePolls(false))}
      >
        Show Answered Polls
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  button {
    width: 45%;
    padding: 1rem 0;
    background-color: #7e7e7e;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      background-color: #2e2e2e;
    }
  }

  .active-btn {
    /* color: #61a266; */
    background-color: #2e2e2e;
  }
`;

export default ToggleQuestions;
