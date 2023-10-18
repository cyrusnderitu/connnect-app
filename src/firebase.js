import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDE01s2lZecR966U5L1jHTKPqiQcWwdO0w",
  authDomain: 'react-chat-app-4b76e.firebaseapp.com',
  projectId: 'react-chat-app-4b76e',
  storageBucket: 'react-chat-app-4b76e.appspot.com',
  messagingSenderId: '997932427726',
  appId: '1:997932427726:web:ab06650ff8ef1eddb3e39f'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth()
export  const db = getFirestore(app)