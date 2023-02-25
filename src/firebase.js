// Import the functions you need from the SDKs you need
import firebase from 'firebase/app'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyByCRsR4mDgxrnmXOGqXmzuu_tZxKoKHEg",
    authDomain: "utube-clon.firebaseapp.com",
    projectId: "utube-clon",
    storageBucket: "utube-clon.appspot.com",
    messagingSenderId: "298377977958",
    appId: "1:298377977958:web:4a139e4dcf9b6d6ab0cda7"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()