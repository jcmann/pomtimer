import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';
import TimerDisplay from './TimerDisplay'; 
import TimerControl from './TimerControl'; 

const Timer = (props) => {

    const [timeLeft, setTimeLeft] = props.changeTimeLeft; 
    const [pomSetting, setPomSetting] = props.pomSetting;  
    const [currentStatus, setCurrentStatus] = props.currentStatus; 
    const initialTime = props.initialTime; 

    // currentTime state is in seconds, this formats it to MM:SS using regex
    function calculateTimeLeft() {
        let minsLeft = Math.floor(timeLeft / 60) + ''; 
        let secondsLeft = Math.floor(timeLeft % 60) + ''; 

        // Assures seconds displays two digit formatting
        if (secondsLeft.length < 10) {
            secondsLeft = secondsLeft.padStart(2, '0'); 
        }

        return `${minsLeft}:${secondsLeft}`; 
    }

    return(
        <section className="timer">

            <TimerDisplay
                calculateTimeLeft={calculateTimeLeft}
            /> 

            <TimerControl 
                changeCurrentStatus={[currentStatus, setCurrentStatus]}
                timeLeft={[timeLeft, setTimeLeft]}
                initialTime={initialTime}
            />

        </section>

    );
    
}

export default Timer; 