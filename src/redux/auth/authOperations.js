import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { offRefresh, onRefresh, setUser } from './authSlice';

const provider = new GoogleAuthProvider();

export const authByGoogle = createAsyncThunk(
  'auth/google',
  async (_, thunkAPI) => {
    try {
      const result = await signInWithPopup(auth, provider);
      return {
        name: result.user.displayName,
        email: result.user.email,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      onAuthStateChanged(auth, user => {
        dispatch(onRefresh());
        if (user) {
          const name = user.displayName;
          const email = user.email;
          dispatch(setUser({ name, email }));
        }
        setTimeout(() => {
          dispatch(offRefresh());
        }, 500);
      });
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
