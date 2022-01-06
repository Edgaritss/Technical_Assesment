import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAgAulbkyPVrua3MLe_sS9T59buEp2mAwU",
    authDomain: "prekiassesment.firebaseapp.com",
    projectId: "prekiassesment",
    storageBucket: "prekiassesment.appspot.com",
    messagingSenderId: "901192014501",
    appId: "1:901192014501:web:17a1bad1bef1929dc60b4c"
};
 // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);


  export {fire}