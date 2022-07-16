
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDbNhZgJMi2ryKCCS2vKHcPZPImP1wiHKg",
  authDomain: "vue-chart-5b3c0.firebaseapp.com",
  databaseURL: "https://vue-chart-5b3c0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vue-chart-5b3c0",
  storageBucket: "vue-chart-5b3c0.appspot.com",
  messagingSenderId: "1002942812571",
  appId: "1:1002942812571:web:76ad7bc0f2ddd2af6d913e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const pilkadas = collection(db, "pilkadas");
export default pilkadas;