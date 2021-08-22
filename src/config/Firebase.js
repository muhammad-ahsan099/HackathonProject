

import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA1sFTwUKKqJtipKTzNQejqAU1QTqPU7ew",
    authDomain: "hackathon-project-fcd1e.firebaseapp.com",
    projectId: "hackathon-project-fcd1e",
    storageBucket: "hackathon-project-fcd1e.appspot.com",
    messagingSenderId: "643408231587",
    appId: "1:643408231587:web:081a604e56cf96aebcd316",
    measurementId: "G-WFNK57RG39"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  export const db = firebase.firestore();
  export const storage = firebase.storage();
  export const auth = firebase.auth();






















