// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD93m4orMviVTdZx6ImXg5KD0CWlMTnH-A',
  authDomain: 'my-task-board-6842a.firebaseapp.com',
  projectId: 'my-task-board-6842a',
  storageBucket: 'my-task-board-6842a.appspot.com',
  messagingSenderId: '520304342033',
  appId: '1:520304342033:web:1a3d081205b72d6135edb0'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore DB

export const db = getFirestore(app)
