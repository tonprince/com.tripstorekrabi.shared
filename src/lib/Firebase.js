import { browser } from "$app/env";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBfQMXXhFtE0Xb74bj0ekyV75ddg5zJErE",
  authDomain: "tripstorekrabi-next.firebaseapp.com",
  projectId: "tripstorekrabi-next",
  storageBucket: "tripstorekrabi-next.appspot.com",
  messagingSenderId: "434158008221",
  appId: "1:434158008221:web:3bc38fc5de2068181a6174",
  measurementId: "G-TWDSWMP06N"
};

let firestore;
if (getApps().length === 0) {
  let app = initializeApp(firebaseConfig);
  firestore = getFirestore(app);

  if (browser) {
    enableIndexedDbPersistence(firestore, { synchronizeTabs: true })
      .catch((e) => {
        console.error(e);
      });
  }
} else {
  firestore = getFirestore(getApp());
}

let auth = getAuth();

export { firestore, auth };