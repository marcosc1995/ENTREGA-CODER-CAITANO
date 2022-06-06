
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAQr-IlABVEgZNBSxj_b9xd4bMvyGfbH7g",
  authDomain: "entrega-coder-caba5.firebaseapp.com",
  projectId: "entrega-coder-caba5",
  storageBucket: "entrega-coder-caba5.appspot.com",
  messagingSenderId: "329069537452",
  appId: "1:329069537452:web:6e3c12b43ffe4e3f735709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)