// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMcu2qxcb5oNi7cLOsB11xPiMtQAKaOGA",
  authDomain: "movie-app-cbe7a.firebaseapp.com",
  projectId: "movie-app-cbe7a",
  storageBucket: "movie-app-cbe7a.appspot.com",
  messagingSenderId: "281076083064",
  appId: "1:281076083064:web:ace7f083ea3a649132808d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };