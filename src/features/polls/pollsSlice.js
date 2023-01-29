import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { _getQuestions } from '../../_DATA';

const pollsSlice = createSlice({
  name: 'polls',
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadPolls.pending, (state, action) => {});
    builder.addCase(loadPolls.fulfilled, (state, action) => {
      state.data = Object.values(action.payload);
    });
    builder.addCase(loadPolls.rejected, (state, action) => {});
  },
});

export const loadPolls = createAsyncThunk('polls/loadPolls', async () => {
  const response = await _getQuestions();
  return response;
});

export default pollsSlice.reducer;
