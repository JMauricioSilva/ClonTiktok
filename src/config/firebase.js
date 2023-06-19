import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCqDpEBn56E1_OWigD8RER64pU1yL6vfaY",
  authDomain: "clonetiktok-jornada.firebaseapp.com",
  projectId: "clonetiktok-jornada",
  storageBucket: "clonetiktok-jornada.appspot.com",
  messagingSenderId: "837368570950",
  appId: "1:837368570950:web:ede8b87f43626c23b99647"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;