import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import firebase from 'firebase';



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
      list: [],
      name: ''
    };
    this.createTask = this.createTask.bind(this);
    this.submitTask = this.submitTask.bind(this);
  }

  componentWillMount(){
    
     firebase.database().ref('list/').once('value', (snap) =>{
      var todos = [];
      var that = this;
      
      snap.forEach(function(data){
        todos.push(data.val());
        that.setState({list: todos});
      });
     

    });

  }

  createTask(e){
    
    this.setState({
      task: e.target.value,
      name: e.target.value
    });

  }
   
  submitTask(e){

    var newTask = {
      task: this.state.task
    };
    
    
    firebase.database().ref('list/').push(newTask);
    this.state.list.push(newTask);
    this.setState({
      list: this.state.list
    });
    this.state.name = '';
  }
    

  render() {
    var tasks = this.state.list.map(function(row){
                   console.log('mmas', row.task);
                  return row.task;
    });
    
    var todo = tasks.map((data,index) => {
            return  <TableRow key={index}>
                    < TableRowColumn>{data}</TableRowColumn>
                    </TableRow >
      })
              
    

    return (
      <div>
        
        <TextField
          hintText="Create new task"
          floatingLabelText="New Task"
          value={this.state.name}
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
               {todo}
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