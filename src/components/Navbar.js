import Wrapper from '../assests/wrappers/Navbar';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser, togglePolls } from '../store';
import { FaHome, FaPoll, FaSignOutAlt } from 'react-icons/fa';
import { GiTrophy } from 'react-icons/gi';

const Navbar = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.users.currentUser);

  const logout = () => {
    dispatch(setCurrentUser(null));
    dispatch(togglePolls(true));
  };

  return (
    <Wrapper>
      <ul>
        <div>
          <li>
            <Link to='/'>
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to='/leaderboard'>
              <GiTrophy />
              Leaderboard
            </Link>
          </li>
          <li>
            <Link to='/add'>
              <FaPoll />
              New Poll
            </Link>
          </li>
        </div>
        {authUser && (
          <div className='user-menu'>
            <li className='user-item'>
              <img className='avatar' src={authUser.avatarURL} alt='avatar' />
              <span>{authUser.user}</span>
            </li>

            <li>
              <Link to='/' onClick={logout}>
                <FaSignOutAlt />
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
