import { createSlice } from '@reduxjs/toolkit';
import { authByGoogle } from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    name: '',
    email: '',
    isLogIn: false,
    isRefresh: false,
  },
  extraReducers: builder => {
    return builder.addCase(authByGoogle.fulfilled, (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.isLogIn = true;
    });
  },
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.isLogIn = true;
    },
    onRefresh: state => {
      state.isRefresh = true;
    },
    offRefresh: state => {
      state.isRefresh = false;
    },
  },
});

export default authSlice.reducer;
export const { setUser, onRefresh, offRefresh } = authSlice.actions;
