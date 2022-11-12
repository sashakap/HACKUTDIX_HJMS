// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgf4lc_2sOBGxyfmthfgli_bAsHX2daac",
  authDomain: "food-calculator-6c9cd.firebaseapp.com",
  projectId: "food-calculator-6c9cd",
  storageBucket: "food-calculator-6c9cd.appspot.com",
  messagingSenderId: "424465104637",
  appId: "1:424465104637:web:44d8bc95040270b9e0c894",
  measurementId: "G-HB8KXVNKDD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db }