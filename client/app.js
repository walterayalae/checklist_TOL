import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './components/Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as firebase from 'firebase';

injectTapEventPlugin();
// Import compiled SASS
require('./sass/app.sass');

const config = {
 apiKey: "AIzaSyAW2xBguGGUddUrrkjjuQwgPOIRjbqEuC0",
    authDomain: "checklist-tol.firebaseapp.com",
    databaseURL: "https://checklist-tol.firebaseio.com",
    storageBucket: "checklist-tol.appspot.com",
    messagingSenderId: "450304474030"
};

firebase.initializeApp(config)

ReactDOM.render(<Main />, window.document.getElementById('app'));
