import Poll from './Poll';

const PollsList = ({ polls, title }) => {
  return (
    <section>
      <header>
        <h2>{title}</h2>
      </header>
      <main>
        {polls.map((poll) => (
          <Poll key={poll.id} author={poll.author} timestamp={poll.timestamp} />
        ))}
      </main>
    </section>
  );
};

export default PollsList;
