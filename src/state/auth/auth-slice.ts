import { createSlice } from '@reduxjs/toolkit';
import { statusAction, userAction } from '../actions';

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

interface User {
  id: string;
  name: string;
  email: string;
  token: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: statusAction) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action: userAction) => {
      state.user = action.payload;
    },
  },
});

export const { setIsAuthenticated, setUser } = authSlice.actions;
export default authSlice.reducer;
