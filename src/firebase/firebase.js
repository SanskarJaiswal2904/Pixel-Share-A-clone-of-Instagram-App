// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaQww9G3H3fLhGabDSWnQe-AtvYiI2EXk",
  authDomain: "pixel-share-webdev.firebaseapp.com",
  projectId: "pixel-share-webdev",
  storageBucket: "pixel-share-webdev.appspot.com",
  messagingSenderId: "678037554088",
  appId: "1:678037554088:web:1d9dc54d824d56e076539d",
  measurementId: "G-QVQ6719ZME"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
