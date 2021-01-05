import React from 'react';
import ReactDOM from 'react-dom';

const TimerControl = (props) => {

    const [currentStatus, setCurrentStatus] = props.changeCurrentStatus; 
    const [timeLeft, setTimeLeft] = props.timeLeft; 

    // Used to control currentStatus state and button text
    function toggleStatus() {

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

    // Reset button functionality
    function clickReset() {
        setTimeLeft(props.initialTime); 
        setCurrentStatus('stopped');
    }
    
    return(
        <div id="timerControls">
            <button 
                onClick={toggleStatus}              
                id="toggleActiveBtn">
                {currentStatus === 'active' ? 'Stop' : 'Start'}    
            </button>
            
            <button onClick={clickReset}>Reset</button>
        </div>
    );
    
}

export default TimerControl; 