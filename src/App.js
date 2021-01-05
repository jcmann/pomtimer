import React from 'react';
import ReactDOM from 'react-dom';
import {useEffect, useState} from 'react'; 

import PomControl from './PomControl'; 
import Timer from './Timer'; 

const App = () => {

    const [pomSetting, setPomSetting] = useState('pomodoro'); 
    const [timeLeft, setTimeLeft] = useState(1500); 
    const [initialTime, setInitialTime] = useState(1500); 
    const [currentStatus, setCurrentStatus] = useState('stopped');

    // Runs when the pomSetting is updated in PomControl 
    // if the pomSetting is changed, the timeLeft must also update
    useEffect(() => {

        if (pomSetting === 'pomodoro') {
            setTimeLeft(1500);
            setInitialTime(1500); 
            setCurrentStatus('stopped');
        }
        else if (pomSetting === 'short') {
            setTimeLeft(300);
            setInitialTime(300); 
            setCurrentStatus('stopped');
        }
        else if (pomSetting === 'long') {
            setTimeLeft(900);
            setInitialTime(900); 
            setCurrentStatus('stopped');
        }

    }, [pomSetting]);

    // Maintains interval 
    useEffect(() => {

        let interval = null; 

        if (currentStatus === 'active' && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000); 
        } else {
            clearInterval(interval); 
        }
        return () => clearInterval(interval); 

    }, [currentStatus, timeLeft, pomSetting]);
    

    return (
        <section className="App">
        <PomControl
            changePomSetting={[pomSetting, setPomSetting]}
        />
        <Timer 
            initialTime={initialTime} 
            changeTimeLeft={[timeLeft, setTimeLeft]}
            pomSetting={[pomSetting, setPomSetting]}
            currentStatus={[currentStatus, setCurrentStatus]}
        />
    </section>
    );
} 

export default App;
