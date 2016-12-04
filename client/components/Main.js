import React from 'react';
import Navigation from './Navigation';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const defaultTheme = {
  palette: {
    primary1Color: '#1976D2', // primary buttons and appbars
    primary2Color: '#1976D2',
    primary3Color: '#BBDEFB',
    accent1Color: '#009688', // secondary buttons and slider indicators
    accent2Color: '#00796B', // toolbars, table highlight color
    borderColor: '#BDBDBD', // dividers
    shadowColor: '#000000', // hover shadows
  },
};


const muiTheme = getMuiTheme(defaultTheme);

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
     var time = function(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();

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
      <div className="my-component">
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
