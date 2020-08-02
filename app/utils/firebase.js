import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD_f7o8PnXZME7jKLH1HRH3gNR6rdhYDA0",
  authDomain: "tfg-ing.firebaseapp.com",
  databaseURL: "https://tfg-ing.firebaseio.com",
  projectId: "tfg-ing",
  storageBucket: "tfg-ing.appspot.com",
  messagingSenderId: "930750095931",
  appId: "1:930750095931:web:1a4fe7c1560e8161b3321e",
};

export const firebaseapp = firebase.initializeApp(firebaseConfig);
