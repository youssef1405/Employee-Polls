import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/userSlice';
import questionsReducer from './slices/questionsSlice';

export const store = configureStore({
  reducers: {
    users: usersReducer,
    questions: questionsReducer,
  },
});
