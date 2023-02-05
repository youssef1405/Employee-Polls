import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { loadPolls, getUsers } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  SharedLayout,
  Login,
  Home,
  Leaderboard,
  NewPoll,
  OpenedPoll,
  Error,
} from './pages';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPolls());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='leaderboard' element={<Leaderboard />} />
          <Route path='new-poll' element={<NewPoll />} />
          <Route path='questions/:questionId' element={<OpenedPoll />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
      <ToastContainer position='top-center' />
    </BrowserRouter>
  );
}

export default App;
