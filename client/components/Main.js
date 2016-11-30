import React from 'react';
import Checklist from './Checklist';
import Navigation from './Navigation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const defaultTheme = {
  palette: {
    primary1Color: '#2196F3', // primary buttons and appbars
    primary2Color: '#1976D2',
    primary3Color: '#BBDEFB',
    accent1Color: '#009688', // secondary buttons and slider indicators
    accent2Color: '#00796B', // toolbars, table highlight color
    accent3Color: '#004D40', // table header text color
    borderColor: '#BDBDBD', // dividers
    shadowColor: '#000000', // hover shadows
    textColor: '#212121', // text color
    alternateTextColor: '#FFFFFF', // text color in app/tab bars, buttons, and chips
    pickerHeaderColor: '#2196F3', // text color in app/tab bars, buttons, and chips
  },
};


const muiTheme = getMuiTheme(defaultTheme);

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="my-component">
        <h1>Churro Co Austin</h1>
        <h2>Trail of Lights 2016</h2>
        <MuiThemeProvider muiTheme={muiTheme}>
        <div>< Navigation /></div>
        </MuiThemeProvider>
        <MuiThemeProvider muiTheme={muiTheme}>
        <div>
        < Checklist/>
        </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
