import firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
};

const app = firebase.initializeApp(firebaseConfig);

console.log('firebase.js')

export default {
    initilaze() {
        return app
    },
    kimlik() {
        return app.auth()
    },
    db() {
        return app.database()
    }
}