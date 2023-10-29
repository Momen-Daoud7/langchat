import { getApp, getApps, initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDReC8TSo3O6D7IINE9qAM-mLI5RZfSH0k",
  authDomain: "langchat-85e57.firebaseapp.com",
  projectId: "langchat-85e57",
  storageBucket: "langchat-85e57.appspot.com",
  messagingSenderId: "519588198579",
  appId: "1:519588198579:web:dc847a5b9e3e28d47198c6",
};

  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
