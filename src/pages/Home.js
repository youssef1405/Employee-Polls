
import { useSelector } from 'react-redux';
import { PollsList, ToggleQuestions, Loading } from '../components';
import { sortPolls } from '../utils';

const Home = () => {
  const polls = useSelector((state) => state.polls.data);
  const currentUser = useSelector((state) => state.users.currentUser);
  const { isShowingNewPolls, isLoading } = useSelector((state) => state.polls);

  const answeredPolls = polls.filter(
    (poll) =>
      poll.optionOne.votes.includes(currentUser.user) ||
      poll.optionTwo.votes.includes(currentUser.user)
  );

  const newQuestions = polls.filter(
    (poll) =>
      !poll.optionOne.votes.includes(currentUser.user) &&
      !poll.optionTwo.votes.includes(currentUser.user)
  );

  if (isLoading) {
    return <Loading text='Creating a New Poll in Progress...' />;
  }

  return (
    <main>
      <ToggleQuestions />
      {isShowingNewPolls ? (
        <PollsList polls={sortPolls(newQuestions)} title='New Polls' />
      ) : (
        <PollsList polls={sortPolls(answeredPolls)} title='Answered Polls' />
      )}
    </main>
  );
};

export default Home;
