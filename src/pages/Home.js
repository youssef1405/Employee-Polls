import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadPolls } from '../store';
import { Poll } from '../components';

const Home = () => {
  const polls = useSelector((state) => state.polls.data);
  const currentUser = useSelector((state) => state.users.currentUser);

  const renderedAnsweredPolls = polls
    .filter(
      (poll) =>
        poll.optionOne.votes.includes(currentUser) ||
        poll.optionTwo.votes.includes(currentUser)
    )
    .map((poll) => (
      <Poll key={poll.id} author={poll.author} timestamp={poll.timestamp} />
    ));

  const renderedNewQuestions = polls
    .filter(
      (poll) =>
        !poll.optionOne.votes.includes(currentUser) &&
        !poll.optionTwo.votes.includes(currentUser)
    )
    .map((poll) => (
      <Poll key={poll.id} author={poll.author} timestamp={poll.timestamp} />
    ));

  console.log(renderedNewQuestions);
  console.log(renderedAnsweredPolls);

  return (
    <div>
      {renderedNewQuestions}
      <hr />
      {renderedAnsweredPolls}
    </div>
  );
};

export default Home;
