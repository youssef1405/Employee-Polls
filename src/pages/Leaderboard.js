import React from 'react';
import { sortUsers } from '../utils';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GiTrophy } from 'react-icons/gi';
import { toast } from 'react-toastify';
import Wrapper from '../assests/wrappers/Leaderboard';

const Leaderboard = () => {
  const naviagte = useNavigate();
  const { data } = useSelector((state) => state.users);
  const { user } = useSelector((state) => state.users.currentUser);
  const sortedUsers = data && sortUsers(Object.values(data));

  useEffect(() => {
    if (!user) {
      naviagte('/login');
      toast.warn('Please sign in first!');
      return;
    }
  });

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

        {sortedUsers &&
          sortedUsers.map((user) => {
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

export default Leaderboard;
