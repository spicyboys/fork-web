import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyBwrr4wpugaHnXd0jfRso-Ge4nt9HtQ49o",
  projectId: "fork-61fea",
  authDomain: "fork-61fea.firebaseapp.com",
});

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
