import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react'; 


const TimerDisplay = (props) => {

    const calculateTimeLeft = props.calculateTimeLeft; 

    return (
        <div id="timerDisplay">
            {calculateTimeLeft()}
        </div>
    );
}

export default TimerDisplay; 