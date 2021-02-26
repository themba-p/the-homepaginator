import React from 'react';
import './stateStyle.css';
import { filterStates } from '../common';

import PinIcon from '../icons/Pin.js';
import HistoryIcon from '../icons/History';
import EyeIcon from '../icons/Eye';
import FolderIcon from '../icons/folder-icon.png';

class DefaultState extends React.Component {
    render() {
        let stateData = [
            {
                icon: <EyeIcon/>,
                title: 'Most viewed',
                state: filterStates.MostViewed
            },
            {
                icon: <HistoryIcon/>,
                title: 'History',
                state: filterStates.History,
            },
            {
                icon: <PinIcon/>,
                title: 'Pins',
                state: filterStates.Pins,
            },
            {
                icon: <img src={FolderIcon} alt=''/>,
                title: 'Folders',
                state: filterStates.Folders
            },
        ]

        let className = '';
        
   
        return (
            <div className='filter-state-container'>
                <ul className='menu-nav'>         
                {
                    stateData.map(el => {

                        if(this.props.currentState === filterStates.MostViewed && el.state === filterStates.MostViewed) {
                        className = 'filter-button-inner filter-button-active';
                        } else if(this.props.currentState === filterStates.Pins && el.state === filterStates.Pins) {
                        className = 'filter-button-inner filter-button-active'
                        } else {
                        className = 'filter-button-inner';
                        }
                        return (                        
                            <button className='filter-button' onClick={() => this.props.onStateChange(el.state)}>
                                <div className={className}>
                                    <div className='icon'>{el.icon}</div>
                                    <span>{el.title}</span>
                                </div>
                            </button>
                        )
                    })
                }
                </ul>
            </div>
        );
    }
}

export default DefaultState;