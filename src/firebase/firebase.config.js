
/* import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

export const app = initializeApp(firebaseConfig); */
 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjk3DTEfDg0OLh0nY2CulH5vOzrNk0bRM",
  authDomain: "appointment-service-3dcf4.firebaseapp.com",
  projectId: "appointment-service-3dcf4",
  storageBucket: "appointment-service-3dcf4.appspot.com",
  messagingSenderId: "808536945979",
  appId: "1:808536945979:web:1c02568ac49c41ab9df31e"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);