import { configureStore } from '@reduxjs/toolkit';
import pollsReducer from '../features/polls/pollsSlice';
import usersReducer from '../features/users/usersSlice';
import {
  loadPolls,
  showPoll,
  savePoll,
  changePollStatus,
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
  showPoll,
  savePoll,
  changePollStatus,
  addAnswer,
  addPoll,
};
