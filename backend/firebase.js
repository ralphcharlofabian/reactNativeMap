import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDorbNY5R3FjjoctQv2BN-I85pS-05xhZ4",
    authDomain: "chatapp-5d92b.firebaseapp.com",
    databaseURL: "https://chatapp-5d92b.firebaseio.com",
    projectId: "chatapp-5d92b",
    storageBucket: "chatapp-5d92b.appspot.com",
    messagingSenderId: "773035512263"
  };

  firebase.initializeApp(config);

  export default firebase;