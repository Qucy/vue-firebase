import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
apiKey: "AIzaSyCwu1vVBoulD3L61x9eevGs5MAQIWZwU60",
authDomain: "ninja-chat-d4c11.firebaseapp.com",
databaseURL: "https://ninja-chat-d4c11.firebaseio.com",
projectId: "ninja-chat-d4c11",
storageBucket: "ninja-chat-d4c11.appspot.com",
messagingSenderId: "184720482542"
};

const firebaseAPP = firebase.initializeApp(config)
firebaseAPP.firestore().settings({timestampsInSnapshots: true})

export default firebaseAPP.firestore()


