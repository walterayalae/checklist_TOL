import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class Shifts extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <DropDownMenu value={this.props.value} onChange={this.props.handleChange}>
        
        <MenuItem value={1} label="12pm-4pm" primaryText="Afternoon" />
        <MenuItem value={2} label="5:30pm-10:30pm" primaryText="Evening" />
        <MenuItem value={3} label="8am-11pm" primaryText="All day" />
        <MenuItem value={4} label="OFF" primaryText="OFF" />
      </DropDownMenu>
    );
  }
}