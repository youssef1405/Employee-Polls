import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const Loading = ({ text }) => {
  return (
    <Wrapper>
      <h2>{text}</h2>
      <FaSpinner className='spinner' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #4e4e4e;

  .spinner {
    font-size: 2rem;
  }
`;

export default Loading;
