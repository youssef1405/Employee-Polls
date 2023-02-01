import Wrapper from '../assests/wrappers/Navbar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../store';

const Navbar = () => {
  const dispatch = useDispatch();
  const { user, avatarURL } = useSelector((state) => state.users.currentUser);

  return (
    <Wrapper>
      <ul>
        <div>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/leaderboard'>Leaderboard</Link>
          </li>
          <li>
            <Link to='/new-poll'>New</Link>
          </li>
        </div>
        {user && (
          <div>
            <li className='user-item'>
              <img className='avatar' src={avatarURL} alt='avatar' />
              <span>{user}</span>
            </li>

            <li>
              <Link to='/' onClick={() => dispatch(setCurrentUser({}))}>
                Logout
              </Link>
            </li>
          </div>
        )}
      </ul>
    </Wrapper>
  );
};

export default Navbar;
