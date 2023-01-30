import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { loadPolls } from './store';
import { Poll } from './components';
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
          <Route index element={<Home />} />
          <Route path='leaderboard' element={<Leaderboard />} />
          <Route path='new-poll' element={<NewPoll />} />
          <Route path='questions/:questionId' element={<OpenedPoll />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
