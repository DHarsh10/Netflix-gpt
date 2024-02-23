
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAE9opWd3tzfeUn3XPNCXY33UOK468UiDs",
  authDomain: "netflix-gpt-1dd1b.firebaseapp.com",
  projectId: "netflix-gpt-1dd1b",
  storageBucket: "netflix-gpt-1dd1b.appspot.com",
  messagingSenderId: "1060358942453",
  appId: "1:1060358942453:web:ba907e50cb39e7aba7dfbc",
  measurementId: "G-EQJ8BGJ7T4"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const  auth = getAuth();