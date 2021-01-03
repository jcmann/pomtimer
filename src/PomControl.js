import React from 'react';
import ReactDOM from 'react-dom';

class PomControl extends React.Component {

    render() {
        return (
            <section className="pomControl">
                <button>
                    Pomodoro
                </button>
                <button>
                    Short Break
                </button>
                <button>
                    Long Break
                </button>
            </section>
        )
    }

}

export default PomControl; 