import Wrapper from '../assests/wrappers/LoginForm';
import logo from '../assests/images/main-img.svg';

const LoginForm = () => {
  return (
    <Wrapper>
      <h1>Employee Polls</h1>
      <img src={logo} alt='' />

      <h2>Log In</h2>
      <form>
        <div>
          <label htmlFor=''>User</label>
          <input type='text' placeholder='Username' />
        </div>
        <div>
          <label htmlFor=''>Password</label>
          <input type='password' placeholder='Password' />
        </div>
      </form>
    </Wrapper>
  );
};

export default LoginForm;
