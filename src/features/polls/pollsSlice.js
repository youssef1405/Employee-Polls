import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { _getQuestions, _saveQuestion } from '../../_DATA';

const pollsSlice = createSlice({
  name: 'polls',
  initialState: {
    data: [],

    isShowingNewPolls: true,
    isLoading: false,
  },
  reducers: {
    changePollStatus: (state, action) => {
      const { id, user, option } = action.payload;
      const answeredPoll = state.data.find((poll) => poll.id === id);
      answeredPoll[option].votes.push(user);
    },
    togglePolls: (state, action) => {
      state.isShowingNewPolls = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadPolls.pending, (state, action) => {});
    builder.addCase(loadPolls.fulfilled, (state, action) => {
      state.data = Object.values(action.payload);
    });
    builder.addCase(loadPolls.rejected, (state, action) => {});
    builder.addCase(savePoll.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(savePoll.fulfilled, (state, action) => {
      state.data.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(savePoll.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const loadPolls = createAsyncThunk('polls/loadPolls', async () => {
  try {
    const response = await _getQuestions();
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const savePoll = createAsyncThunk(
  'polls/savePoll',
  async (poll, thunkAPI) => {
    try {
      const response = await _saveQuestion(poll);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);

export const { changePollStatus, togglePolls } = pollsSlice.actions;

export default pollsSlice.reducer;
