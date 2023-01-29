import styled from 'styled-components';
import Poll from './Poll';

const PollsList = ({ polls, title }) => {
  return (
    <Wrapper>
      <header>
        <h2>{title}</h2>
      </header>
      <main>
        {polls.map((poll) => (
          <Poll key={poll.id} author={poll.author} timestamp={poll.timestamp} />
        ))}
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  //display: flex;
  /* border: 1px solid #000; */
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  text-align: center;
  width: 90%;
  margin: 1rem auto;

  header {
    border: 1px solid #d6d6d6;
    color: #fff;
    background-color: #61a266;
    h2 {
      margin: 0.5rem 0;
    }
  }

  main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    border: 1px solid #d6d6d6;

    padding-top: 1rem;
  }
`;

export default PollsList;
