import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAxZqlhU4eTwZlY8Wu0_HW6BZ8g3j0s-ks",
    authDomain: "geo-nijia.firebaseapp.com",
    databaseURL: "https://geo-nijia.firebaseio.com",
    projectId: "geo-nijia",
    storageBucket: "",
    messagingSenderId: "120490134794"
};

const firebaseAPP = firebase.initializeApp(config)
firebaseAPP.firestore().settings({timestampsInSnapshots: true})

export default firebaseAPP.firestore()
