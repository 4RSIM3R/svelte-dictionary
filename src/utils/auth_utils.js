// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCm3S7dg-jar5cwncbKF0FNH3jhCacMWmw",
  authDomain: "svelte-dictionary.firebaseapp.com",
  projectId: "svelte-dictionary",
  storageBucket: "svelte-dictionary.appspot.com",
  messagingSenderId: "351154498302",
  appId: "1:351154498302:web:59fd3e47c5fb328b9253af",
  measurementId: "G-N47WJ5SX4E"
};


export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);