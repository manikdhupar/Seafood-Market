import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDeUEWgBYRPEN7YQuxy1KMX8MgMYR-meYw",
    authDomain: "reactapp-b6d69.firebaseapp.com",
    databaseURL: "https://reactapp-b6d69.firebaseio.com" 
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;