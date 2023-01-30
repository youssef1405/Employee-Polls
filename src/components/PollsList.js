import styled from 'styled-components';
import Poll from './Poll';
import Wrapper from '../assests/wrappers/PollsList';

const PollsList = ({ polls, title }) => {
  return (
    <Wrapper>
      <header>
        <h2>{title}</h2>
      </header>
      <main>
        {polls.map((poll) => (
          <Poll key={poll.id} {...poll} />
        ))}
      </main>
    </Wrapper>
  );
};

export default PollsList;
