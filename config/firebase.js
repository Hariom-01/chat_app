// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKjdTYO-VIjuLzHl5XVZ_-dnGzrJRfy1U",
  authDomain: "facebook-c6abc.firebaseapp.com",
  projectId: "facebook-c6abc",
  storageBucket: "facebook-c6abc.appspot.com",
  messagingSenderId: "304207884728",
  appId: "1:304207884728:web:ca39d4b478bcad46ecdf4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);