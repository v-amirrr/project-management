import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDjDYmqCJ4Z9YPn2DrnjuN30i6PkrSNdqE",
    authDomain: "project-management-cb63d.firebaseapp.com",
    projectId: "project-management-cb63d",
    storageBucket: "project-management-cb63d.appspot.com",
    messagingSenderId: "254479926488",
    appId: "1:254479926488:web:37b2f7e606e97b03ef43ad"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };