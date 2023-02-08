import error from '../assests/images/404.svg';
import Wrapper from '../assests/wrappers/Error';

const Error = () => {
  return (
    <Wrapper>
      <img src={error} alt="page can't be found" />
      <h2>Ohh! Page not found</h2>
      <p>we can't seem to find the page you are looking for!</p>
    </Wrapper>
  );
};

export default Error;
