import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCpIEjBM_LNVdaMCXNJg3uIozodWObf3WI",
  authDomain: "bt3103-cc0a1.firebaseapp.com",
  databaseURL: "https://bt3103-cc0a1.firebaseio.com",
  projectId: "bt3103-cc0a1",
  storageBucket: "bt3103-cc0a1.appspot.com",
  messagingSenderId: "857333218445",
  appId: "1:857333218445:web:86ce5b894c258bff7136c4",
  measurementId: "G-MHDRFBR05E"
};

  firebase.initializeApp(firebaseConfig);
  var database = firebase.firestore();
  export default database;