import Wrapper from '../assests/wrappers/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const username = useSelector((state) => state.users.currentUser);
  return (
    <Wrapper>
      <ul>
        <div>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/leaderboard'>Leaderboard</Link>
          </li>
          <li>
            <Link to='/new-poll'>New</Link>
          </li>
        </div>
        <div>
          <li>{username}</li>
          <li>Logout</li>
        </div>
      </ul>
    </Wrapper>
  );
};

export default Navbar;
