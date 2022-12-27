// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADO1lVZxANpYZk0yE-w_RyTjRC07DW3do",
  authDomain: "velvety-tube-345618.firebaseapp.com",
  projectId: "velvety-tube-345618",
  storageBucket: "velvety-tube-345618.appspot.com",
  messagingSenderId: "1073271331075",
  appId: "1:1073271331075:web:87a344996986f6539b3136",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
