// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'Your_apiKey',
  authDomain: 'Your_authDomain',
  projectId: 'Your_projectId',
  storageBucket: 'Your_storageBucket',
  messagingSenderId: 'Your_messagingSenderId',
  appId: 'Your_appId'
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore DB

export const db = getFirestore(app)
