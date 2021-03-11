import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyBFZIYoNPLEbB5-3erhk-5Jc47vObMS-i8",
  authDomain: "linkedin-9c16e.firebaseapp.com",
  projectId: "linkedin-9c16e",
  storageBucket: "linkedin-9c16e.appspot.com",
  messagingSenderId: "852335902034",
  appId: "1:852335902034:web:3569b33cf1ebc6cc6ece8b",
  measurementId: "G-DM4SW2YXV9"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db =firebaseApp.firestore()
const auth=firebase.auth()

export {db,auth}