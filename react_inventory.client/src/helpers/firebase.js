import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut as logout } from "firebase/auth";
import firebaseConfig from "./firebase-config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.useDeviceLanguage();

export const firebaseAuth = auth;