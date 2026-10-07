// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcN0WWAbAY5jePRcfXY03DlOozpzm-D8Q",
  authDomain: "netflix-clone-app-2eec5.firebaseapp.com",
  projectId: "netflix-clone-app-2eec5",
  storageBucket: "netflix-clone-app-2eec5.firebasestorage.app",
  messagingSenderId: "81346215410",
  appId: "1:81346215410:web:f30fb19e779d74228c3f6b",
  measurementId: "G-SHDZ1Y66TP"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }