import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

var config = {
    apiKey: "AIzaSyC3hYW02k-Y7SSVnIzrp0X7wkNvl1Eyk3s",
    authDomain: "healinghale-f949f.firebaseapp.com",
    databaseURL: "https://healinghale-f949f.firebaseio.com",
    projectId: "healinghale-f949f",
    storageBucket: "healinghale-f949f.appspot.com",
    messagingSenderId: "823485104246"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
    }
  }

  export default Firebase;
