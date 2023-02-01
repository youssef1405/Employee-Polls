import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { loadPolls } from './store';

import {
  SharedLayout,
  Login,
  Home,
  Leaderboard,
  NewPoll,
  OpenedPoll,
} from './pages';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPolls());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='leaderboard' element={<Leaderboard />} />
          <Route path='new-poll' element={<NewPoll />} />
          <Route path='questions/:questionId' element={<OpenedPoll />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
