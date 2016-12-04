import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import firebase from 'firebase';


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
      info: [],
      name: ''
    };
    this.createTask = this.createTask.bind(this);
    this.submitTask = this.submitTask.bind(this);
    this.resetDb = this.resetDb.bind(this);
    
  }

  componentWillMount(){
    
     firebase.database().ref('info/').once('value', (snap) =>{
      var todos = [];
      var that = this;
      
      snap.forEach(function(data){
        todos.push(data.val());
        that.setState({info: todos});
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
    
    
    firebase.database().ref('info/').push(newTask);
    this.state.info.push(newTask);
    this.setState({
      info: this.state.info
    });
    this.state.name = '';
  }
  
  resetDb(){
    var reset = firebase.database().ref('info/');
    reset.remove();
    this.setState({
      info: []
    });
  }

  render() {
    var tasks = this.state.info.map(function(row){
                
                  return row.task;
    });
    
    var todo = tasks.map((data,index) => {
            return  <TableRow key={index}>
                    < TableRowColumn>{data}</TableRowColumn>
                    </TableRow >
      })

    var style = {
      margin: 12,

      };
              
   

    return (
      <div>
        
        <TextField
          hintText="Create new task"
          floatingLabelText="New Task"
          value={this.state.name}
          onChange={this.createTask}
          style={{marginBottom: '50px'}}
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
          onRowSelection={this.onRowSelection}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
            
              <TableHeaderColumn colSpan="3" tooltip="Task" style={{textAlign: 'center'}}>
                {<h3 style={{textAlign: 'left'}}>Select all</h3>}
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
        <RaisedButton 
            label='Reset'
            primary={true} 
            style={style}
            onClick={this.resetDb}
        />
      </div>
    );
  }
}