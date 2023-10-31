// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore/lite"
// TODO:  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUanQhro-_65AsOEalBZ_ZV9Nma2Tdbgo",
  authDomain: "react-cursos-b1792.firebaseapp.com",
  projectId: "react-cursos-b1792",
  storageBucket: "react-cursos-b1792.appspot.com",
  messagingSenderId: "559653972947",
  appId: "1:559653972947:web:e8cd34a3c0400b1c29dd26"
};

// Initialize Firebase
export const FireBaseApp  = initializeApp(firebaseConfig);

export const FireBaseAuht = getAuth(FireBaseApp);

export const FireBaseDB   = getFirestore(FireBaseApp);

// Esto es el firebase para hacer todo lo que necesitamos
// NOTA: Esto es diferente por cada uso, recordatorio: Usar diferente cada aplicacion