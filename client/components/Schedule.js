import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';


const tableData = [
  {
    tolSchedule: 'Thu,12/8',
    notes: 'Moving Day',
    leo:'12 - 6PM',
    wally: '12 - 6PM',
    david: '12 - 6PM',
    chris: '12 - 6PM',
    corey: 'OFF',
    annie: '',
    caroline: '',
    ian: '',
    ivan: '',
    jessica: ''
  },
  {
    tolSchedule: 'Fri,12/9',
    notes: 'Prep/Moving',
    leo:'12 - 6PM',
    wally: '8 - 11AM',
    david: '8 - 11AM',
    chris: 'OFF',
    corey: 'OFF',
    annie: '',
    caroline: '',
    ian: '',
    ivan: '',
    jessica: ''
  },
  {
    tolSchedule: 'Sat,12/10',
    notes: '1st Night',
    leo:'12 - 6PM',
    wally: '8 - 11PM',
    david: '8 - 11PM',
    chris: '12 - 4PM',
    corey: '5:30-10:30PM',
    annie: '',
    caroline: '',
    ian: '',
    ivan: '5:30-10:30',
    jessica: ''
  },
  {
    tolSchedule: 'Sun,12/11',
    notes: '',
    leo:'12 - 9PM',
    wally: '8 - 11PM',
    david: '8 - 11PM',
    chris: 'OFF',
    corey: '5:30-10:30',
    annie: '',
    caroline: '5:30-10:30',
    ian: '',
    ivan: '5:30-10:30',
    jessica: ''
  },
  {
    tolSchedule: 'Mon,12/12',
    notes: '',
    leo:'8 - 11PM',
    wally: '8 - 11PM',
    david: '8 - 11PM',
    chris: '12 - 4PM',
    corey: '5:30-10:30PM',
    annie: '',
    caroline: '',
    ian: '',
    ivan: '',
    jessica: ''
  },
  {
    tolSchedule: 'Tue,12/13',
    notes: '',
    leo:'8 - 11PM',
    wally: 'OFF',
    david: '8-11PM',
    chris: '12-4PM',
    corey: '5:30-10:30PM',
    annie: '',
    caroline: '',
    ian: '',
    ivan: '',
    jessica: ''
  },
  {
    tolSchedule: 'Wed,12/14',
    notes: '',
    leo:'8 - 11PM',
    wally: '8-11PM',
    david: '8-11PM',
    chris: '12-4PM',
    corey: 'OFF',
    annie: '5:30-10:30',
    caroline: '',
    ian: '',
    ivan: '',
    jessica: ''
  },
  {
    tolSchedule: 'Thu,12/15',
    notes: '',
    leo:'8 - 11PM',
    wally: '8-11PM',
    david: '8-11PM',
    chris: 'OFF',
    corey: '5:30-10:30PM',
    annie: '',
    caroline: '',
    ian: '',
    ivan: '',
    jessica: ''
  },
  {
    tolSchedule: 'Fri,12/16',
    notes: '',
    leo:'8 - 11PM',
    wally: '8-11PM',
    david: '8- 11PM',
    chris: '12-4PM',
    corey: '5:30-10:30PM',
    annie: '',
    caroline: '6-10:30PM',
    ian: '',
    ivan: '',
    jessica: ''
  },
  {
    tolSchedule: 'Sat,12/17',
    notes: 'Prep Day',
    leo:'8 - 11PM',
    wally: '8 - 11PM',
    david: '8 - 11PM',
    chris: '12-4PM',
    corey: '5:30-10:30PM',
    annie: '',
    caroline: '',
    ian: '',
    ivan: '5:30-10:30PM',
    jessica: ''
  },
  {
    tolSchedule: 'Sun,12/18',
    notes: 'Leo Prep',
    leo:'12 - 9PM',
    wally: '8 - 11PM',
    david: '8 - 11PM',
    chris: 'OFF',
    corey: '5:30-10:30PM',
    annie: '5:30-10:30PM',
    caroline: '',
    ian: '5:30-10:30PM',
    ivan: '',
    jessica: ''
  },
  {
    tolSchedule: 'Mon,12/19',
    notes: 'Last Week',
    leo:'8 - 11PM',
    wally: '8 - 11PM',
    david: '8 - 11PM',
    chris: '12-4PM',
    corey: '5:30-10:30PM',
    annie: '',
    caroline: '',
    ian: '',
    ivan: '',
    jessica: ''
  },
  {
    tolSchedule: 'Tue,12/20',
    notes: 'Last Week',
    leo:'8 - 11PM',
    wally: '8 - 11PM',
    david: '8 - 11PM',
    chris: '12-4PM',
    corey: '5:30-10:30PM',
    annie: '',
    caroline: '',
    ian: '',
    ivan: '',
    jessica: ''
  },
  {
    tolSchedule: 'Wed,12/21',
    notes: 'High Vol',
    leo:'8 - 11PM',
    wally: '8 - 11PM',
    david: '8 - 11PM',
    chris: '12-4PM',
    corey: 'OFF',
    annie: '5:30-10:30PM',
    caroline: '',
    ian: '6-10:30PM',
    ivan: '',
    jessica: ''
  },
  {
    tolSchedule: 'Thur,12/22',
    notes: 'Very High Vol',
    leo:'8 - 11PM',
    wally: '8-11PM',
    david: '8-11PM',
    chris: '12-4PM',
    corey: '5:30-10:30PM',
    annie: '',
    caroline: '',
    ian: '',
    ivan: '',
    jessica: '5:30-10:30PM'
  },
  {
    tolSchedule: 'Friday,12/23',
    notes: 'HIGH VOL',
    leo:'8 - 11PM',
    wally: '8 - 11PM',
    david: '8 - 11PM',
    chris: '5:30-10:30PM',
    corey: '5:30-10:30PM',
    annie: '',
    caroline: '',
    ian: '',
    ivan: '',
    jessica: ''
  },
];

export default class ClosingChecklist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: false,
      showCheckboxes: false,
      height: '600px',
    };
  }


  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="Schedule" style={{textAlign: 'center'}}>
                {<h1>Schedule</h1>}
              </TableHeaderColumn>
            </TableRow>
            
          </TableHeader>
          <TableBody
            style={{textAlign: 'center'}}
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
          >
          <TableRow style={{textAlign: 'center'}}>
              
              <TableHeaderColumn tooltip="Schedule"><h3>Schedule</h3></TableHeaderColumn>
              <TableHeaderColumn tooltip="Chris"><h3>Chris</h3></TableHeaderColumn>
              <TableHeaderColumn tooltip="Corey"><h3>Corey</h3></TableHeaderColumn>
              <TableHeaderColumn tooltip="Annie"><h3>Annie</h3></TableHeaderColumn>
              <TableHeaderColumn tooltip="Caroline"><h3>Caroline</h3></TableHeaderColumn>
              <TableHeaderColumn tooltip="Ian"><h3>Ian</h3></TableHeaderColumn>
              <TableHeaderColumn tooltip="Ivan"><h3>Ivan</h3></TableHeaderColumn>
              
              
              
            </TableRow>
            {tableData.map( (row, index) => (
              <TableRow style={{textAlign: 'center'}} key={index} selected={row.selected}>
                
                <TableRowColumn>{row.tolSchedule}</TableRowColumn>
                <TableRowColumn>{row.chris}</TableRowColumn>
                <TableRowColumn>{row.corey}</TableRowColumn>
                <TableRowColumn>{row.annie}</TableRowColumn>
                <TableRowColumn>{row.caroline}</TableRowColumn>
                <TableRowColumn>{row.ian}</TableRowColumn>
                <TableRowColumn>{row.ivan}</TableRowColumn>
               
                
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