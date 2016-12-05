import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import ClosingChecklist from './ClosingChecklist';
import OpeningChecklist from './OpeningChecklist';
import Schedule from './Schedule';
import EmergencyNumbers from './EmergencyNumbers';
import GroceryList from './GroceryList';


export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      showComponent: false,
      showOpening: false,
      showScedule: true,
      showContact: false,
      showGrocery: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
    this.openingClick = this.openingClick.bind(this);
    this.scheduleClick= this.scheduleClick.bind(this);
    this.contactClick = this.contactClick.bind(this);
    this.groceryClick = this.groceryClick.bind(this);
    this.navOptions = this.navOptions.bind(this);
  }

_onButtonClick() {
  this.setState({
    showComponent: true,
    showOpening: false,
    showScedule: false,
    showContact: false,
    showGrocery: false
  });
}

openingClick() {
  this.setState({
    showOpening: true,
    showComponent: false,
    showScedule:false,
    showContact:false,
    showGrocery: false
  });
}

scheduleClick() {
  this.setState({
    showOpening: false,
    showComponent: false,
    showScedule: true,
    showContact: false,
    showGrocery: false
  });
}

contactClick() {
  this.setState({
    showOpening: false,
    showComponent: false,
    showScedule: false,
    showContact: true,
    showGrocery: false
  });
}

groceryClick(){
  this.setState({
    showOpening: false,
    showComponent: false,
    showScedule: false,
    showContact: false,
    showGrocery: true
  });

}

navOptions(event, index, value){
  this.setState({ value });

}



  render() {
    return (
      <div>
     <Toolbar >
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.navOptions}>
            <MenuItem value={1} primaryText="Schedule" onClick={this.scheduleClick} />
            <MenuItem value={2} primaryText="Opening Checklist" onClick={this.openingClick} />
            <MenuItem value={3} primaryText="Closing Checklist" onClick={this._onButtonClick} />
            <MenuItem value={4} primaryText="Grocery List" onClick={this.groceryClick}/>
            <MenuItem value={5} primaryText="Emergency Numbers" onClick={this.contactClick}/>
          </DropDownMenu>
        </ToolbarGroup>
        </Toolbar>
        {this.state.showComponent ?
              <ClosingChecklist /> :
              null
            }
        {this.state.showOpening ?
              <OpeningChecklist /> :
              null
            }
        {this.state.showScedule ?
              <Schedule /> :
              null
            }
        {this.state.showGrocery ?
              <GroceryList /> :
              null
            }
        {this.state.showContact ?
              <EmergencyNumbers /> :
              null
            }
        
      </div>
    );
  }
}
