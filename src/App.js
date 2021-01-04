import React from 'react';
import ReactDOM from 'react-dom';
import {useEffect, useState} from 'react'; 

import './App.css';
import PomControl from './PomControl'; 
import Timer from './Timer'; 

const App = () => {

    const [pomSetting, setPomSetting] = useState('pomodoro'); 
    const [timeLeft, setTimeLeft] = useState('1500'); 

    // let initialTime = 0;
    // if (pomSetting === 'pomodoro') {
    //     initialTime = 1500; 
    // } else if (pomSetting === 'short') {
    //     initialTime = 300; 
    // } else if (pomSetting === 'long') {
    //     initialTime = 900; 
    // }

    // Runs when the pomSetting is updated in PomControl 
    // if the pomSetting is changed, the timeLeft must also update
    useEffect(() => {

        if (pomSetting === 'pomodoro') {
            setTimeLeft(1500);
        }
        else if (pomSetting === 'short') {
            setTimeLeft(300);
        }
        else if (pomSetting === 'long') {
            setTimeLeft(900);
        }

    }, pomSetting);

    return (
        <div className="App">
        <PomControl
            changePomSetting={[pomSetting, setPomSetting]}
        />
        <Timer initialTime={timeLeft} />
    </div>
    );
} 


export default App;
