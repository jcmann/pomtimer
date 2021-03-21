import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 

const PomControl = (props) => {

    const [pomSetting, setPomSetting] = props.changePomSetting; 

    return (
        <section className="pomControl">
            <button 
                onClick={() => setPomSetting('pomodoro')} 
                className="controlButton"
            >
                Pomodoro
            </button>
            <button 
                onClick={() => setPomSetting('short')}
                className="controlButton"
            >
                Short Break
            </button>
            <button 
                onClick={() => setPomSetting('long')}
                className="controlButton"
            >
                Long Break
            </button>
        </section>
    );
    

}

export default PomControl; 