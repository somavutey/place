import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import "firebase/analytics";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFUtOiBOmOof_iTJPSyPgiuPDTpchr6zs",
    authDomain: "places-99af3.firebaseapp.com",
    projectId: "places-99af3",
    storageBucket: "places-99af3.appspot.com",
    messagingSenderId: "400477562273",
    appId: "1:400477562273:web:5816fa4aadc2d32142d7e0",
    measurementId: "G-5YNN70GNBF"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const fireStore = firebase.firestore(); // database
const fireStorage = firebase.storage();
const fireAuth = firebase.auth();

export {
    fireStore, // Database
    fireStorage, // storage
    fireAuth, // authentication
};
