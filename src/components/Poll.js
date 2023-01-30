import Wrapper from '../assests/wrappers/Poll';
import { formatDate } from '../utils';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setOpenedQuestion } from '../store';

const Poll = ({ id, author, timestamp }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <h3>{author}</h3>
      <p>{formatDate(timestamp)}</p>
      <Link
        to={`/questions/${id}`}
        onClick={() => dispatch(setOpenedQuestion(id))}
      >
        Show
      </Link>
    </Wrapper>
  );
};

export default Poll;
