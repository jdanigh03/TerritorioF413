import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Esto es para Firestore si planeas usarlo.
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCluCrm5eOiM566ANpVQSHI6rt0nSw-nIM",
  authDomain: "territoriof413-387ea.firebaseapp.com",
  projectId: "territoriof413-387ea",
  storageBucket: "territoriof413-387ea.appspot.com",
  messagingSenderId: "12960072567",
  appId: "1:12960072567:web:3310ec223a157db8a35772",
  measurementId: "G-3QPMNBPE7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and export it
export const db = getFirestore(app);