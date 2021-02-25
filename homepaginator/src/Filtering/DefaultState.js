import React from 'react';
import './stateStyle.css';

import PinIcon from '../icons/Pin.js';
import HistoryIcon from '../icons/History';
import EyeIcon from '../icons/Eye';
import FolderIcon from '../icons/folder-icon.png';

class DefaultState extends React.Component {
    render() {
        return (
            <div className='filter-state-container'>
                <div className='menu-nav'>
                    <button className='filter-button'>
                        <div className='filter-button-inner'>
                            <div className='icon'><EyeIcon/></div>
                            <span>Most viewed</span>
                        </div>
                    </button>
                    <button className='filter-button'>
                        <div className='filter-button-inner'>
                            <div className='icon'><HistoryIcon/></div>
                            <span>History</span>
                        </div>
                    </button>
                    <button className='filter-button'>
                        <div className='filter-button-inner filter-button-active'>
                            <div className='icon'><PinIcon/></div>
                            <span>Pins</span>
                        </div>
                    </button>
                    <button className='filter-button'>
                        <div className='filter-button-inner'>
                            <div className='icon'>
                                <img src={FolderIcon} alt=''/>
                            </div>
                            <span>Folders</span>
                        </div>
                    </button>
                </div>
            </div>
        );
    }
}

export default DefaultState;