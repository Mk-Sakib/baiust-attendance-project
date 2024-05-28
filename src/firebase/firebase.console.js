// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOYHiuMpZM0PPAm2rWBkQ7pd2JTTmBhnc",
  authDomain: "baiust-attendance-project.firebaseapp.com",
  projectId: "baiust-attendance-project",
  storageBucket: "baiust-attendance-project.appspot.com",
  messagingSenderId: "592291183750",
  appId: "1:592291183750:web:7a2c81247e3e1693872507"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;