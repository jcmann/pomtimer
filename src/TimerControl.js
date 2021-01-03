import React from 'react';
import ReactDOM from 'react-dom';

class TimerControl extends React.Component {
    render() {
        return(
            <div>
                <button>Start</button>
                <button>Stop</button>
                <button>Reset</button>
            </div>
        );
    }
}

export default TimerControl; 