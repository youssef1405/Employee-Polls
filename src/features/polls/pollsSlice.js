import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { _getQuestions } from '../../_DATA';

const pollsSlice = createSlice({
  name: 'polls',
  initialState: {
    questions: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPolls.pending, (state, action) => {});
    builder.addCase(loadPolls.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
    builder.addCase(loadPolls.rejected, (state, action) => {});
  },
});

export const loadPolls = createAsyncThunk('polls/loadPolls', async () => {
  const response = await _getQuestions();
  return response;
});

export default pollsSlice.reducer;
