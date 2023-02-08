import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  h2,
  h3 {
    color: #4e4e4e;
  }
  img {
    border-radius: 50%;
    width: 200px;
    margin-bottom: 1rem;
  }

  .options {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
`;

export default Wrapper