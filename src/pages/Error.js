import error from '../assests/images/404.svg';
import styled from 'styled-components';

const Error = () => {
  return (
    <Wrapper>
      <img src={error} alt="page can't be found" />
      <h2>Ohh! Page not found</h2>
      <p>we can't seem to find the page you are looking for!</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4e4e4e;

  img {
    width: 100%;
    max-width: 700px;
    margin-bottom: 1rem;
  }
`;

export default Error;
