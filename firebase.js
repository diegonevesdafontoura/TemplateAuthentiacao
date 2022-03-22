// Import the functions you need from the SDKs you need
//import * as firebase from "firebase
//import * as firebase from "firebase/app";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// cada produto do firebase deve ser importad separadamente
//por exemplo auth de autenticação
import "firebase/compat/auth";

import "firebase/compat/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey: "cole aqui sua chave",


  authDomain: "diego-expo.firebaseapp.com",
//
databaseURL: "https://diego-expo-default-rtdb.firebaseio.com",

//
projectId: "diego-expo",

storageBucket: "diego-expo.appspot.com",

messagingSenderId: "60839181686",

appId: "1:60839181686:web:986a38092f30caa32dce57"

};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()
export { auth, firestore };