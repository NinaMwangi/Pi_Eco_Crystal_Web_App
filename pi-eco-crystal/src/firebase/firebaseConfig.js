import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHLFjccDG5G-yF7on4u6PKJ9JjGB2UwEQ",
  authDomain: "pi-eco-crystal-35d73.firebaseapp.com",
  projectId: "pi-eco-crystal-35d73",
  storageBucket: "pi-eco-crystal-35d73.firebasestorage.app",
  messagingSenderId: "569907456584",
  appId: "1:569907456584:web:914a0aa161c6875125467d",
  measurementId: "G-RWGYQSWD64"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);
const auth = getAuth(App)
const db = getFirestore(App)

export { App, auth, db, getDocs, collection };