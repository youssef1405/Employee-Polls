import { configureStore } from '@reduxjs/toolkit';
import pollsReducer from '../features/polls/pollsSlice';
import usersReducer from '../features/users/usersSlice';
import {
  loadPolls,
  setOpenedQuestion,
  savePoll,
} from '../features/polls/pollsSlice';
import { getUsers, setCurrentUser } from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    polls: pollsReducer,
    users: usersReducer,
  },
});

export { loadPolls, getUsers, setCurrentUser, setOpenedQuestion, savePoll };
