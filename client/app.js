import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './components/Main';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();
// Import compiled SASS
require('./sass/app.sass');

ReactDOM.render(<Main />, window.document.getElementById('app'));
