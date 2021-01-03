import React from 'react';
import ReactDOM from 'react-dom';
import {useState, useEffect} from 'react';
import TimerDisplay from './TimerDisplay'; 
import TimerControl from './TimerControl'; 

const Timer = (props) => {

    const [currentTime, setCurrentTime] = useState(props.initialTime); 
    const [currentStatus, setCurrentStatus] = useState('stopped'); 

    function toggleActive() {

        const btn = document.querySelector('#toggleActiveBtn');

        if (currentStatus === 'stopped') {
            setCurrentStatus('active'); 
            btn.innerHTML = "Stop"; 
        }
        else { // if currentStatus === 'active' 
            setCurrentStatus('stopped'); 
            btn.innerHTML = "Start"; 
        }

    }

    function clickReset() {
        setCurrentTime(props.initialTime); 
        setCurrentStatus('stopped');
    }

    function calculateTimeLeft() {
        let minsLeft = Math.floor(currentTime / 60); 
        let secondsLeft = Math.floor(currentTime % 60) ; 

        return `${minsLeft}:${secondsLeft}`; 
    }

    useEffect(() => {

        let interval = null; 

        if (currentStatus === 'active' && currentTime > 0) {
            interval = setInterval(() => {
                setCurrentTime(currentTime - 1);
            }, 1000); 
        } else {
            clearInterval(interval); 
        }
        return () => clearInterval(interval); 

    }, [currentStatus, currentTime]); 

    return(
        <div className="timer">

            <div id="timerDisplay">
                {calculateTimeLeft()}
            </div>

            <div id="timerControls">
                <button onClick={toggleActive} id="toggleActiveBtn">
                    {currentStatus === 'active' ? 'Stop' : 'Start'}    
                </button>
                
                <button onClick={clickReset}>Reset</button>
            </div>

        </div>

    );
    
}

export default Timer; 