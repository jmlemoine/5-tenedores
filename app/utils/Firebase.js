import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0nx_ISt7R0B3U-OWF_M-TA1sVAYdHIiI",
  authDomain: "tenedores-e7242.firebaseapp.com",
  databaseURL: "https://tenedores-e7242.firebaseio.com",
  projectId: "tenedores-e7242",
  storageBucket: "tenedores-e7242.appspot.com",
  messagingSenderId: "431280114217",
  appId: "1:431280114217:web:4459a25a3d43f1aecbea38",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
