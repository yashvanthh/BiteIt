// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO_heTLqT_RURJuNCBgJq28y6Al5EBU-A",
  authDomain: "biteit-c0530.firebaseapp.com",
  projectId: "biteit-c0530",
  storageBucket: "biteit-c0530.appspot.com", // ✅ corrected ".firebasestorage.app" to ".appspot.com"
  messagingSenderId: "940649313645",
  appId: "1:940649313645:web:4efa998cfdca193d40d664",
  measurementId: "G-3VWH4DJE1L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ Add Firestore

// Export the necessary services
export { auth, analytics, db };
