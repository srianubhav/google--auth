// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdIMPdIzpRBkzOghKGncIEa-eI0g2CDyc",
  authDomain: "auth-app-40fc0.firebaseapp.com",
  projectId: "auth-app-40fc0",
  storageBucket: "auth-app-40fc0.appspot.com",
  messagingSenderId: "243813197062",
  appId: "1:243813197062:web:d7bb1709f09bc841b82a87",
  measurementId: "G-0E17CW58D8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Auth Provider
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
