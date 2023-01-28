import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPolls } from './store';
import { Poll } from './components';

function App() {
  const polls = useSelector((state) => state.polls.data);
  // console.log(polls[Object.keys(polls)[0]]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPolls());
  }, [dispatch]);

  return (
    <div className='App'>
      {/* {Object.keys(polls).map((key) => (
        <Poll username={polls[key].author} />
      ))} */}
      app
    </div>
  );
}

export default App;
