import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import firebase from 'firebase';


export default class GroceryList extends React.Component {
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
      showCheckboxes: false,
      height: '600px',
      task:'',
      grocery: [],
      name: ''
    };
    this.createTask = this.createTask.bind(this);
    this.submitTask = this.submitTask.bind(this);
    this.resetDb = this.resetDb.bind(this);
    
  }

  componentWillMount(){
    
     firebase.database().ref('grocery/').once('value', (snap) =>{
      const todos = [];
      const that = this;
      
      snap.forEach(function(data){
        todos.push(data.val());
        that.setState({grocery: todos});
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

    const newTask = {
      task: this.state.task
    };
    
    if(this.state.task === ''){
      alert('Add new item to your list');
    }else{
    firebase.database().ref('grocery/').push(newTask);
    this.state.grocery.push(newTask);
    this.setState({
      info: this.state.grocery
    });
    this.state.name = '';
    this.state.task = '';
    }
  }
  
  resetDb(){
    const reset = firebase.database().ref('grocery/');
    reset.remove();
    this.setState({
      grocery: []
    });
  }

  render() {
    const tasks = this.state.grocery.map(function(row){
                
                  return row.task;
    });
    
    const todo = tasks.map((data,index) => {
            return  (<TableRow key={index}>
                    < TableRowColumn><h2>{data}</h2></TableRowColumn>
                    </TableRow >)
      })

    const style = {
      margin: 12,
      };
              
   

    return (
      <div>

        <div style={{textAlign:'center'}}>
        {<h1 >To Do List</h1>}
        <TextField
          hintText="Add item"
          floatingLabelText="New to do"
          value={this.state.name}
          onChange={this.createTask}
          
        />
        <RaisedButton 
            label="Add " 
            secondary={true} 
            style={style}
            onClick={this.submitTask}
        />
        </div>
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
            
              <TableHeaderColumn colSpan="3" tooltip="Just do it" style={{textAlign: 'center'}}>
                
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
              <TableHeaderColumn tooltip="Item"><h2>Things to do</h2></TableHeaderColumn>
            </TableRow>
               {todo}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}
          >
            </TableFooter>
        </Table>
        <RaisedButton 
            label='delete list'
            primary={true} 
            style={style}
            onClick={this.resetDb}
        />
      </div>
    );
  }
}