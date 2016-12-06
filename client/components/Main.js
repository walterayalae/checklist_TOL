import React from 'react';
import Navigation from './Navigation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  blue500,
  blue700,
  blueGrey100,
  blueGrey500,
  darkBlack,
  grey300,
  lightBlack,
  purpleA200,
  white,
  red200
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';



export default class Main extends React.Component {
  
  render() {
    const defaultTheme = {

  palette: {
    
    primary1Color: blue500,
    primary2Color: red200,
    primary3Color: lightBlack,
    accent1Color: blue700,
    accent2Color: blueGrey100,
    accent3Color: blueGrey500,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade( darkBlack, 0.3 ),
    pickerHeaderColor: blue500,
  },
};


   const muiTheme = getMuiTheme(defaultTheme);

      const time = function(){
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1;
        let yyyy = today.getFullYear();

          if(dd<10) {
            dd='0'+dd
              } 

          if(mm<10) {
            mm='0'+mm
              } 

          today = mm+'/'+dd+'/'+yyyy;

          return today;
    };
     
     
    return (
      <div>
      <img src='http://churrocoaustin.com/wp-content/uploads/2014/12/ChurrCoLogoSalmon144x144.png'  />
      <div style={{textAlign:'center', display:'inline-block'}}>
        <h1>Churro Co Austin</h1>
        <h2>Trail of Lights 2016</h2>
        <h3>{time()}</h3>
      </div>
        <MuiThemeProvider muiTheme={muiTheme}>
        < Navigation />
        </MuiThemeProvider>
      </div>
    );
  }
}
