import { configureStore } from '@reduxjs/toolkit';
import pollsReducer from '../features/polls/pollsSlice';
import usersReducer from '../features/users/usersSlice';
import {
  loadPolls,
  savePoll,
  changePollStatus,
  togglePolls,
} from '../features/polls/pollsSlice';
import {
  getUsers,
  setCurrentUser,
  addAnswer,
  addPoll,
} from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    polls: pollsReducer,
    users: usersReducer,
  },
});

export {
  loadPolls,
  getUsers,
  setCurrentUser,
  savePoll,
  changePollStatus,
  addAnswer,
  addPoll,
  togglePolls,
};
