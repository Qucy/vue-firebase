  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBroANHe2caY9affAkGrWHr8If-94AC4Sk",
    authDomain: "vue-ninja-smoothies-1357b.firebaseapp.com",
    databaseURL: "https://vue-ninja-smoothies-1357b.firebaseio.com",
    projectId: "vue-ninja-smoothies-1357b",
    storageBucket: "vue-ninja-smoothies-1357b.appspot.com",
    messagingSenderId: "938865824109"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({timestampsInSnapshots: true})

  // export firestore database
  export default firebaseApp.firestore()