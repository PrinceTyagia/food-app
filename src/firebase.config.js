import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCinUC5SU8hiZdFbmtWzVw8pq6BSfS0TrM",
  authDomain: "food-app-643e1.firebaseapp.com",
  databaseURL: "https://food-app-643e1-default-rtdb.firebaseio.com",
  projectId: "food-app-643e1",
  storageBucket: "food-app-643e1.appspot.com",
  messagingSenderId: "612693398098",
  appId: "1:612693398098:web:923838e7f4145a18dc858b",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
