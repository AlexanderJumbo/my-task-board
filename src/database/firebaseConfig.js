// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Tu_apiKey,
  authDomain: Tu_authDomain,
  projectId: Tu_projectId,
  storageBucket: Tu_storageBucket,
  messagingSenderId: Tu_messagingSenderId,
  appId: Tu_appId
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore DB

export const db = getFirestore(app)
