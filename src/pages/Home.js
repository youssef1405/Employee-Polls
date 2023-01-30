import { useSelector } from 'react-redux';

import { PollsList } from '../components';

const Home = () => {
  const polls = useSelector((state) => state.polls.data);
  const currentUser = useSelector((state) => state.users.currentUser.user);

  const answeredPolls = polls.filter(
    (poll) =>
      poll.optionOne.votes.includes(currentUser) ||
      poll.optionTwo.votes.includes(currentUser)
  );

  const newQuestions = polls.filter(
    (poll) =>
      !poll.optionOne.votes.includes(currentUser) &&
      !poll.optionTwo.votes.includes(currentUser)
  );

  console.log(newQuestions);
  console.log(answeredPolls);

  return (
    <main>
      <PollsList polls={newQuestions} title='New Polls' />
      <PollsList polls={answeredPolls} title='Answered Polls' />
    </main>
  );
};

export default Home;
