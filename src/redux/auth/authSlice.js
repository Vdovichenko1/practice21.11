import { createSlice } from '@reduxjs/toolkit';
import { authByGoogle } from './authOperations';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    name: '',
    email: '',
    isLogIn: false,
  },
  extraReducers: builder => {
    return builder.addCase(authByGoogle.fulfilled, (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.isLogIn = true;
    });
  },
});
