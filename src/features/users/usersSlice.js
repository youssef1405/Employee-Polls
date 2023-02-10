import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { _getUsers } from '../../_DATA';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    currentUser: null,
    data: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },

    addAnswer: (state, action) => {
      const { answers } = state.data[state.currentUser.user];
      const { qid, option } = action.payload;
      answers[qid] = option;
    },

    addPoll: (state, action) => {
      state.data[state.currentUser.user].questions.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getUsers.pending, (state, action) => {});
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      console.log(action.payload);
    });
  },
});

export const getUsers = createAsyncThunk('users/getUsers', async (thunkAPI) => {
  try {
    const response = await _getUsers();
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const { setCurrentUser, addAnswer, addPoll } = usersSlice.actions;

export default usersSlice.reducer;
