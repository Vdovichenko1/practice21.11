import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyB0PdO4_5E759clCs1A-MCKUn_Z9oEDtkU',
  authDomain: 'posts-fb1a0.firebaseapp.com',
  projectId: 'posts-fb1a0',
  storageBucket: 'posts-fb1a0.appspot.com',
  messagingSenderId: '305821382364',
  appId: '1:305821382364:web:791a7a125689a9e2dbe619',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
