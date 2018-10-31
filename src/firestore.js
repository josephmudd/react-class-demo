import firebase from 'firebase';

var config = {
  // Get these from the overview page in your project.
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};
firebase.initializeApp(config);

export default firebase;
