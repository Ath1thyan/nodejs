// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1fqlk8lhVxuIe1vbAGtqUQGYKusEkHyg",
  authDomain: "fir-7366d.firebaseapp.com",
  projectId: "fir-7366d",
  storageBucket: "fir-7366d.appspot.com",
  messagingSenderId: "223345957397",
  appId: "1:223345957397:web:597d8798f363594ac60c1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;