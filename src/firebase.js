import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCekAtvEeNCuYen6JhhIm1rtNWsIlD39CE",
  authDomain: "hooks-blog-22b3a.firebaseapp.com",
  projectId: "hooks-blog-22b3a",
  storageBucket: "hooks-blog-22b3a.appspot.com",
  messagingSenderId: "216402980106",
  appId: "1:216402980106:web:fa3f8ab39608f675ad5ef3"
};
 firebase.initializeApp(firebaseConfig);

 export const firestore = firebase.firestore();