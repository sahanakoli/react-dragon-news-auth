// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD02QTuXf3oOMXTGv2JPe2uI7sA7W1pnpI",
  authDomain: "react-dragon-news-auth-1efea.firebaseapp.com",
  projectId: "react-dragon-news-auth-1efea",
  storageBucket: "react-dragon-news-auth-1efea.appspot.com",
  messagingSenderId: "349284534351",
  appId: "1:349284534351:web:a1dcc6a5165481f56cc23a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;