import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAbDExLUnBlZjRNcZOTypO_uR4mbpEUAT8",
        authDomain: "clone-7b0cb.firebaseapp.com",
        databaseURL: "https://clone-7b0cb.firebaseio.com",
        projectId: "clone-7b0cb",
        storageBucket: "clone-7b0cb.appspot.com",
        messagingSenderId: "481625987929",
        appId: "1:481625987929:web:d2e7df861da5de11270a48",
        measurementId: "G-C20YNRZ3H0"

})
const auth = firebase.auth()
export {auth}