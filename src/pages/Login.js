import Wrapper from '../assests/wrappers/LoginForm';
import logo from '../assests/images/main-img.svg';
import { setCurrentUser } from '../store';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);

  console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (users && users[username] && password === users[username].password) {
      const user = users[username].id;
      const avatarURL = users[username].avatarURL;
      dispatch(setCurrentUser({ user, avatarURL }));
      setIsValid(false);
      navigate('/');
      return;
    }
    setUsername('');
    setPassword('');
    // toast.error('Username or password is invalid. Please try again!');
    setIsValid(true);
  };

  return (
    <Wrapper>
      <h1>Employee Polls</h1>
      <img src={logo} alt='' />

      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor=''>User</label>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setIsValid(false);
            }}
            data-testid='username-input'
          />
        </div>
        <div>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setIsValid(false);
            }}
            data-testid='password-input'
          />
        </div>
        <button data-testid='login-btn'>Login</button>
      </form>
      <div>
        {isValid && (
          <p className='invalid' data-testid='invalid'>
            Username or password is invalid. Please try again!
          </p>
        )}
      </div>
    </Wrapper>
  );
};

export default Login;
