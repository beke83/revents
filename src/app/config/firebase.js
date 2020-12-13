import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig ={ 
    apiKey: "AIzaSyCa5IUzrvAwvsyihc-msZXj0UnBtZd4mWw",
    authDomain: "revents-a46ff.firebaseapp.com",
    projectId: "revents-a46ff",
    storageBucket: "revents-a46ff.appspot.com",
    messagingSenderId: "593467846276",
    appId: "1:593467846276:web:da9c1f5c90617749cddcd1"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;