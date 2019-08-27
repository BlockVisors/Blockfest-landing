import * as firebase from "firebase";


var config = {
    apiKey: "AIzaSyAlJ7Jj3ZARycmW1d901rEN6t3OQWO_p8Q",
    authDomain: "blockfest-landing.firebaseapp.com",
    databaseURL: "https://blockfest-landing.firebaseio.com",
    projectId: "blockfest-landing",
    storageBucket: "",
    messagingSenderId: "51085345734",
    appId: "1:51085345734:web:2578fc9d48e08488"
  };

  let firebaseConfig = firebase.initializeApp(config);

  export default firebaseConfig;