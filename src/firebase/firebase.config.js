
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaAMI3PoUUNnZG_rpYo0in3fmyF1eLcEc",
  authDomain: "chatgpt-proposal.firebaseapp.com",
  projectId: "chatgpt-proposal",
  storageBucket: "chatgpt-proposal.appspot.com",
  messagingSenderId: "154665964816",
  appId: "1:154665964816:web:e836347f0fcfb30b3ec195",
  measurementId: "G-TS29CZWW8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app