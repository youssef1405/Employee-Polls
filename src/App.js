import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadPolls } from './store';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPolls());
  }, [dispatch]);
  return <div className='App'>App</div>;
}

export default App;
