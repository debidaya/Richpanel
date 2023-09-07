// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHTLgFLcosFNPjB-yAzR0yQHCww6T5LQM",
  authDomain: "facebook-helpdesk-b91cd.firebaseapp.com",
  projectId: "facebook-helpdesk-b91cd",
  storageBucket: "facebook-helpdesk-b91cd.appspot.com",
  messagingSenderId: "744345999872",
  appId: "1:744345999872:web:d3fcc62cb0e1880a0796e5",
  measurementId: "G-4SQKQ8NNJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const authentication = getAuth(app)