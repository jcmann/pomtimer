import React from 'react';
import ReactDOM from 'react-dom';
import {useEffect, useState} from 'react'; 

import './App.css';
import PomControl from './PomControl'; 
import Timer from './Timer'; 

class App extends React.Component {
  
  // constructor(props) {
  //   super(props); 
  //   this.state = {
  //     pomSetting: 'pom', 
  //     initialTime: 25,
  //     timeLeft: 25
  //   }; 
  // }
  
  render() {
    return (
      <div className="App">
        <PomControl  />
        <Timer initialTime="30" />
      </div>
    );
  } 
}

export default App;
