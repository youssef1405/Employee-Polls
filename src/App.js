import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { loadPolls, getUsers } from './store';
import { Poll } from './components';
import { SharedLayout, Login, Home, Leaderboard, NewPoll } from './pages';

function App() {
  const polls = useSelector((state) => state.polls.data);
  const users = useSelector((state) => state.users.data);
  // console.log(polls[Object.keys(polls)[0]]);
  //console.log(users);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPolls());
    
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/new-poll' element={<NewPoll />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
