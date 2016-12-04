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
      var todos = [];
      var that = this;
      
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

    var newTask = {
      task: this.state.task
    };
    
    
    firebase.database().ref('grocery/').push(newTask);
    this.state.grocery.push(newTask);
    this.setState({
      info: this.state.grocery
    });
    this.state.name = '';
  }
  
  resetDb(){
    var reset = firebase.database().ref('grocery/');
    reset.remove();
    this.setState({
      grocery: []
    });
  }

  render() {
    var tasks = this.state.grocery.map(function(row){
                
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

        <div style={{textAlign:'center'}}>
        {<h2 >Grocery List</h2>}
        <TextField
          hintText="Add item"
          floatingLabelText="New Item"
          value={this.state.name}
          onChange={this.createTask}
          
        />
        <RaisedButton 
            label="Add item" 
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
            
              <TableHeaderColumn colSpan="3" tooltip="Groceries" style={{textAlign: 'center'}}>
                
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
              <TableHeaderColumn tooltip="Item"><h3>Groceries</h3></TableHeaderColumn>
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