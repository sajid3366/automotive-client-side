// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAqcwQK562z1Zk3EiX33ppcXTtsUZinw4",
  authDomain: "automotive-client-auth.firebaseapp.com",
  projectId: "automotive-client-auth",
  storageBucket: "automotive-client-auth.appspot.com",
  messagingSenderId: "388212367012",
  appId: "1:388212367012:web:4a824c969c621814171031"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;