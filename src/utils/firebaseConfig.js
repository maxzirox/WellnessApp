// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiNy4n3vAikf2oDkSq7xniqMyngdnIlb8",
  authDomain: "wellnesgym-47cea.firebaseapp.com",
  projectId: "wellnesgym-47cea",
  storageBucket: "wellnesgym-47cea.appspot.com",
  messagingSenderId: "957773621724",
  appId: "1:957773621724:web:1072e551023295dc6ec719"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Firestore inicializacion

const dataBase = getFirestore(app)


export default dataBase