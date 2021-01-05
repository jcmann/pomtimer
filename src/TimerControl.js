import React, { useEffect } from 'react';
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

    // Controls the color of the start button 
    useEffect(() => {

        const btn = document.querySelector('#toggleActiveBtn');

        btn.classList.toggle("btnStart")
        btn.classList.toggle("btnStop")
        
    }, [currentStatus]); 

    // Reset button functionality
    function clickReset() {
        setTimeLeft(props.initialTime); 
        setCurrentStatus('stopped');
    }
    
    return(
        <div id="timerControls">
            <button 
                onClick={toggleStatus}              
                id="toggleActiveBtn"
                className="btnStop">
                {currentStatus === 'active' ? 'Stop' : 'Start'}    
            </button>
            
            <button 
                onClick={clickReset}
                id="resetBtn"
            >
                Reset
            </button>
        </div>
    );
    
}

export default TimerControl; 