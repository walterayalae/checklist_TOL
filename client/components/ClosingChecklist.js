import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';


const tableData = [
  {
    task: 'Turn off frier, turn off gas valve, clean frier',
    instructions: 'Check gas tank and close valve.Lockcode:1620.',
  },
  {
    task: 'Clean prep area',
    instructions: 'Clean prep tables, sugar, heatlamps',
  },
  {
    task: 'Check drink containers',
    instructions: 'Empty containers',
  },
  {
    task: 'Wash dishes and utencils',
    instructions: 'Churrera, spoons, empty containers',
  }
];

export default class ClosingChecklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: false,
      showCheckboxes: true,
      height: '300px',
    };
  }


  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                {<h2>Closing Checklist</h2>}
              </TableHeaderColumn>
            </TableRow>
            
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
          <TableRow>
              <TableHeaderColumn tooltip="Task"><h3>Task</h3></TableHeaderColumn>
              <TableHeaderColumn tooltip="Instructions"><h3>Instructions</h3></TableHeaderColumn>
            </TableRow>
            {tableData.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{row.task}</TableRowColumn>
                <TableRowColumn>{row.instructions}</TableRowColumn>
              </TableRow>
              ))}

          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            </TableFooter>
        </Table>
      </div>
    );
  }
}