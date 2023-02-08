import { useSelector, useDispatch } from 'react-redux';
import { togglePolls } from '../store';
import Wrapper from '../assests/wrappers/ToggleQuestions';

const ToggleQuestions = ({ show }) => {
  const dispatch = useDispatch();
  const { isShowingNewPolls } = useSelector((state) => state.polls);

  return (
    <Wrapper>
      <button
        className={isShowingNewPolls ? 'active-btn' : ''}
        onClick={() => dispatch(togglePolls(true))}
      >
        Show New Polls
      </button>
      <button
        className={!isShowingNewPolls ? 'active-btn' : ''}
        onClick={() => dispatch(togglePolls(false))}
      >
        Show Answered Polls
      </button>
    </Wrapper>
  );
};

export default ToggleQuestions;
