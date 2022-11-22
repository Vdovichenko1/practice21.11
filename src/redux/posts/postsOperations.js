import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../firebase/firebase.config';
import { collection, getDocs } from 'firebase/firestore';

export const getPosts = createAsyncThunk(
  'posts/get/all',
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      //   console.log(querySnapshot);
      querySnapshot.forEach(doc => {
        console.log(`${doc.id} => ${doc.data()}`);
        // console.log(doc.id);
      });
    } catch (error) {
      console.log(error);
    }
  }
);

// const unsubscribe = onSnapshot(q, data => {
//   setPosts([]);
//   data.forEach(doc => {
//     setPosts(prevPosts => {
//       const newPost = { ...doc.data(), id: doc.id };
//       return [...prevPosts, newPost];
//     });
//   });
// });
