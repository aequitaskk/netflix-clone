// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCawP4W5NK7SWMv_zVBv_zyfux4OWcEBiI",
  authDomain: "netflix-clone-90ac6.firebaseapp.com",
  projectId: "netflix-clone-90ac6",
  storageBucket: "netflix-clone-90ac6.appspot.com",
  messagingSenderId: "391788106694",
  appId: "1:391788106694:web:8879346875bb56543f98c7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { db, auth };
