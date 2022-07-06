// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB47ynU9zyT0SSqAK_z_L-k54H6jmyqt0g",
  authDomain: "zoo-app-db.firebaseapp.com",
  projectId: "zoo-app-db",
  storageBucket: "zoo-app-db.appspot.com",
  messagingSenderId: "327004113445",
  appId: "1:327004113445:web:70fbcbbb7dc3968454cdcc",
  measurementId: "G-3WEJW273PZ"

};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);
export { db };