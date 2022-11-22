import { createAsyncThunk } from '@reduxjs/toolkit';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const provider = new GoogleAuthProvider();

export const authByGoogle = createAsyncThunk(
  'auth/google',
  async (_, thunkApi) => {
    try {
      const result = await signInWithPopup(auth, provider);
      return {
        name: result.user.displayName,
        email: result.user.email,
      };
    } catch (error) {}
  }
);
