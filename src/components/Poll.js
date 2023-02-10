import Wrapper from '../assests/wrappers/Poll';
import { formatDate } from '../utils';
import { Link } from 'react-router-dom';

const Poll = ({ id, author, timestamp }) => {
  return (
    <Wrapper>
      <h3>{author}</h3>
      <p>{formatDate(timestamp)}</p>
      <Link to={`/questions/${id}`}>Show</Link>
    </Wrapper>
  );
};

export default Poll;
