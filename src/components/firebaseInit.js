
import firebaseConfig from './firebaseConfig'
import firebase from 'firebase'
import 'firebase/firestore'
const firebaseApp = firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore();

var database = firebase.database();

export {database,
        firestore};

//export default firebaseApp.firestore()
