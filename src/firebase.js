import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyD6-G6Tzx7WxFMaZB8Ug8lmMEFW7WknUWE",
  authDomain: "litos-portfolio.firebaseapp.com",
  projectId: "litos-portfolio",
  storageBucket: "litos-portfolio.appspot.com",
  messagingSenderId: "686639534172",
  appId: "1:686639534172:web:cc2e9ae265ce5459925699",
  measurementId: "G-LVCXJG1F8T",
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

var db = firebase.firestore();

export { db };
