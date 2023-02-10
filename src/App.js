import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const authUser = useSelector((state) => state.users.currentUser);
  useEffect(() => {
    dispatch(loadPolls());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route
            index
            element={
              <Login authUser={authUser}>
                <Home />
              </Login>
            }
          />

          <Route
            path='leaderboard'
            element={
              <Login authUser={authUser}>
                <Leaderboard />
              </Login>
            }
          />
          <Route
            path='add'
            element={
              <Login authUser={authUser}>
                <NewPoll />
              </Login>
            }
          />
          <Route
            path='questions/:questionId'
            element={
              <Login authUser={authUser}>
                <OpenedPoll />
              </Login>
            }
          />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
      <ToastContainer position='top-center' data-testid='toast-msg' />
    </BrowserRouter>
  );
}

export default App;
