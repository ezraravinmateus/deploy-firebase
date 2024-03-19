// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDJFcu5ZC35mOqFkA5cvstYk-Xw8aVsQk",
    authDomain: "deploy-firebase-cd22e.firebaseapp.com",
    projectId: "deploy-firebase-cd22e",
    storageBucket: "deploy-firebase-cd22e.appspot.com",
    messagingSenderId: "108137754052",
    appId: "1:108137754052:web:6a1726829ca5b839440891",
    measurementId: "G-QCWMPVT5LP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore();
