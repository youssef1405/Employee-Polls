import React from 'react';
import styled from 'styled-components';
import { sortUsers } from '../utils';
import { useSelector } from 'react-redux';
import { GiTrophy } from 'react-icons/gi';

const Leaderboard = () => {
  const { data } = useSelector((state) => state.users);
  console.log(data);
  console.log(Object.values(data));
  const sortedUsers = sortUsers(Object.values(data));

  return (
    <section>
      <header className='leaderboard-header'>
        <GiTrophy className='trophy-icon' />
        <h2>Leaderboard</h2>
        <GiTrophy className='trophy-icon' />
      </header>
      <Wrapper>
        <div className='header'>Users</div>
        <div className='header'>Answered</div>
        <div className='header'>Created</div>

        {sortedUsers.map((user) => {
          return (
            <React.Fragment key={user.id}>
              <div className='user'>
                <img src={user.avatarURL} alt='avatar' />
                <div>
                  <p>{user.name}</p>
                  <p className='username'>{user.id}</p>
                </div>
              </div>
              <div className='item'>{Object.keys(user.answers).length}</div>
              <div className='item'>{user.questions.length}</div>
            </React.Fragment>
          );
        })}
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  max-width: 900px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  color: #4e4e4e;

  header {
    display: flex;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    border: 1px solid #d6d6d6;
    text-align: center;
    padding: 0.3rem 0;

    p {
      margin: 0;
    }
    .username {
      font-size: 0.9rem;
      color: #3452eb;
    }
  }

  .user {
    display: flex;
    gap: 10px;
    padding-left: 10px;
    align-items: center;
    img {
      width: 40px;
      border-radius: 50%;
    }
    div {
      border: none;
    }
  }

  .header {
    background-color: #61a266;
    color: #fff;
    font-weight: 500;
    font-size: 1.1rem;
    padding: 1rem 0.5rem;
  }
`;

export default Leaderboard;
