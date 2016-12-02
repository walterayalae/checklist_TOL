import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';

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

const style = {
  margin: 12,
};

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
      height: '600px',
      task:'',
      data: [
        {task: 'Turn off frier, turn off gas valve, clean frier'},
        {task: 'Empty containers'}
      ],
    };
    this.createTask = this.createTask.bind(this);
    this.submitTask = this.submitTask.bind(this);
  }

  createTask(e){
    this.setState({
      task: e.target.value
    });
  }

  submitTask(e){
    
    const nextTask = {
      task:this.state.task
    };

    var list = Object.assign([], this.state.data);
    list.push(nextTask);
    this.setState({
      data: list
    });

  }

  render() {
    return (
      <div>
        
        <TextField
          hintText="Create new task"
          floatingLabelText="New Task"
          onChange={this.createTask}
        />
        <RaisedButton 
            label="Create" 
            primary={true} 
            style={style}
            onClick={this.submitTask}
        />
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
              <TableHeaderColumn tooltip="Task"><h3>Tasks</h3></TableHeaderColumn>
            </TableRow>
            {this.state.data.map( (row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{row.task}</TableRowColumn>
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