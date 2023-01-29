import Wrapper from '../assests/wrappers/Poll';
import { formatDate } from '../utils';

const Poll = ({ author, timestamp }) => {
  return (
    <Wrapper>
      <h3>{author}</h3>
      <p>{formatDate(timestamp)}</p>
      <button>Show</button>
    </Wrapper>
  );
};

export default Poll;
