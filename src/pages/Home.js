import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PollsList } from '../components';
import { toast } from 'react-toastify';

const Home = () => {
  const naviagte = useNavigate();
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

  useEffect(() => {
    if (!currentUser) {
      naviagte('/login');
      toast.warn('Please sign in first!');
      return;
    }
  });

  return (
    <main>
      <PollsList polls={newQuestions} title='New Polls' />
      <PollsList polls={answeredPolls} title='Answered Polls' />
    </main>
  );
};

export default Home;
