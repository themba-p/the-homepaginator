import React from 'react';
import './stateStyle.css';

class HistoryState extends React.Component {
    render() {
        return (
            <div className='filter-state-container'>
                <div className='menu-nav'>
                    <button className='filter-button'>
                        <div className='filter-button-inner filter-button-active'>
                            <span>Today</span>
                        </div>
                    </button>
                    <button className='filter-button'>
                        <div className='filter-button-inner'>
                            <span>Yesterday</span>
                        </div>
                    </button>
                    <button className='filter-button'>
                        <div className='filter-button-inner'>
                            <span>Week</span>
                        </div>
                    </button>
                </div>
            </div>
        );
    }
}

export default HistoryState;