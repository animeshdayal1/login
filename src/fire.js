import firebase from 'firebase';



var firebaseConfig = {
    apiKey: "AIzaSyDDahygbdpUFkxHfamokOkj5KHmyqYO9f4",
    authDomain: "auth-login-a0ea3.firebaseapp.com",
    projectId: "auth-login-a0ea3",
    storageBucket: "auth-login-a0ea3.appspot.com",
    messagingSenderId: "351409604548",
    appId: "1:351409604548:web:24438ffd16bf42260c0691",
    measurementId: "G-SJ4EFNPE97"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;