import firebase from 'firebase';


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCcwUUV0AAtlv0xtrx5-yer9pY6oFbp6TI",
    authDomain: "wishlist-d768c.firebaseapp.com",
    databaseURL: "https://wishlist-d768c.firebaseio.com",
    projectId: "wishlist-d768c",
    storageBucket: "wishlist-d768c.appspot.com",
    messagingSenderId: "942671943039",
    appId: "1:942671943039:web:9b6d91fbb48e1bc976364a"
});

const db = firebase.firestore();
const auth = firebase.auth;
// const google = new firebase.auth.GoogleAuthProvider();

export { db, auth};