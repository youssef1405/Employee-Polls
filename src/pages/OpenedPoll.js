// import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Option } from '../components';
import styled from 'styled-components';

const OpenedPoll = () => {
  const poll = useSelector((state) => state.polls.openedQuestion);
  const { author, optionOne, optionTwo } = poll;
  const avatarURL = useSelector((state) => state.users.data[author].avatarURL);
  console.log(poll);

  return (
    <Wrapper>
      <h2>Poll by {author}</h2>
      <img src={avatarURL} alt='' />

      <h3>Would You Rather</h3>
      <div className='options'>
        <Option text={optionOne.text} option='optionOne' />
        <Option text={optionTwo.text} option='optionTwo' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  h2,
  h3 {
    color: #4e4e4e;
  }
  img {
    border-radius: 50%;
    width: 200px;
    margin-bottom: 1rem;
  }

  .options {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
`;

export default OpenedPoll;
