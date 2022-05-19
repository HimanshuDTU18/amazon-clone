// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAsmAoYXh2EGp3MTDb4llahyhimXpDZQtQ",
  authDomain: "fir-cccc1.firebaseapp.com",
  projectId: "fir-cccc1",
  storageBucket: "fir-cccc1.appspot.com",
  messagingSenderId: "22092079540",
  appId: "1:22092079540:web:f9e8f0d65a797d1de812e1",
  measurementId: "G-G2C9PJPFPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);