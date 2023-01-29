import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { _getUsers } from '../../_DATA';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    currentUser: '',
    data: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {});
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {});
  },
});

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const response = await _getUsers();
  return response;
});

export const { setCurrentUser } = usersSlice.actions;

export default usersSlice.reducer;
