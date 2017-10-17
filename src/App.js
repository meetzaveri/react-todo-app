import React, { Component } from 'react';
import TaskList from './tasklist.js';
import Date from './date.js';
import Avatar from './avatar.js';
import AddButton from './addbuttons.js';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks= [
        {
        'time':'11',
        'period':'am', 
        'activity_title':'Calling Off',
        'activity_description':'#reactforenewbies'
        },
        {
        'time':'11',
        'period':'am', 
        'activity_title':'Meeting with Team Leads',
        'activity_description':'New Project Kickoff'
        },
        {
        'time':'11',
        'period':'am', 
        'activity_title':'Call Mom',
        'activity_description':'Return her call before she kills me'
        },
        {
        'time':'11',
        'period':'am', 
        'activity_title':'Fix Wifeys website',
        'activity_description':'FB Ads Integration not working'
        },
        {
        'time':'11',
        'period':'am', 
        'activity_title':'Do DB Backups',
        'activity_description':'Related to upcoming server migration'
        },
      ]
    }
  }
  render() {
    return (
      <div style={{padding: '30px 30px'}}>
          <Avatar />
          <br />
          <Date />
          <br />
          <TaskList tasks={this.state.tasks}/>
          <br />
          <AddButton />
      </div>
    );
  }
}

export default App;