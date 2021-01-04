import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 

const PomControl = (props) => {

    const [pomSetting, setPomSetting] = props.changePomSetting; 

    return (
        <section className="pomControl">
            <button onClick={() => setPomSetting('pomodoro')} >
                Pomodoro
            </button>
            <button onClick={() => setPomSetting('short')}>
                Short Break
            </button>
            <button onClick={() => setPomSetting('long')}>
                Long Break
            </button>
        </section>
    );
    

}

export default PomControl; 