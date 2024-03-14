// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGTFZQwXBxJjjyNxS3mbWteCHhapraG7g",
  authDomain: "netflixgpt-5455a.firebaseapp.com",
  projectId: "netflixgpt-5455a",
  storageBucket: "netflixgpt-5455a.appspot.com",
  messagingSenderId: "98491051745",
  appId: "1:98491051745:web:cef7361a1258a081bb11a0",
  measurementId: "G-7HM7Z8ZCXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);