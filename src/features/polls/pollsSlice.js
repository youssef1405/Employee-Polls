import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { _getQuestions, _saveQuestion } from '../../_DATA';

const pollsSlice = createSlice({
  name: 'polls',
  initialState: {
    data: [],
    openedQuestion: null,
    isShowingNewPolls: true,
    isLoading: false,
  },
  reducers: {
    showPoll: (state, action) => {
      console.log(action.payload);
      state.openedQuestion = state.data.find(
        (poll) => poll.id === action.payload
      );
    },
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
      console.log('pending');
      state.isLoading = true;
    });
    builder.addCase(savePoll.fulfilled, (state, action) => {
      //console.log(action.payload);
      state.data.push(action.payload);
      state.isLoading = false;
    });
    builder.addCase(savePoll.rejected, (state, action) => {});
  },
});

export const loadPolls = createAsyncThunk('polls/loadPolls', async () => {
  const response = await _getQuestions();
  return response;
});

export const savePoll = createAsyncThunk(
  'polls/savePoll',
  async (poll, thunkAPI) => {
    const response = await _saveQuestion(poll);
    console.log(response);
    return response;
  }
);

export const { showPoll, changePollStatus, togglePolls } = pollsSlice.actions;

export default pollsSlice.reducer;
