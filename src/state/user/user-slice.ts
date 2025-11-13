import { fetchUserById } from '../../api/userApi';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { SecondaryUser } from '../types';

export const fetchUser = createAsyncThunk(
  'user/fetchById',
  async (userId: number) => {
    const response = await fetchUserById(userId);
    return response;
  },
);

interface UserState {
  user: SecondaryUser | null;
  status: string;
  error: null | string;
}

const initialState: UserState = {
  user: null,
  status: 'idle',
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? '';
      });
  },
});

export default userSlice.reducer;
