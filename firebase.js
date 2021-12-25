// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp  } from "firebase/app";// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwroPJKG4G5RiUy0gqRYREK3lfCxUOMyE",
  authDomain: "fir-auth-saki.firebaseapp.com",
  projectId: "fir-auth-saki",
  storageBucket: "fir-auth-saki.appspot.com",
  messagingSenderId: "537380044682",
  appId: "1:537380044682:web:2dcb1716300dbe788a9273"
};

// Initialize Firebase


getApps().length === 0 ? initializeApp(firebaseConfig) : getApp()

const auth = getAuth()
export {auth}