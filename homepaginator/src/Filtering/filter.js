import React from 'react';
import './style.css';
import Sort from './sort.js';

// import DefaultState from './DefaultState';
// import FolderState from './FolderState';
import HistoryState from './HistoryState'

import ClearIcon from '../icons/Clear.js';

class Filter extends React.Component {
    render() {
        return (
            <div className='filter-container'>
            <div className='filter-container-inner'>
                <button className='clear-filter-button'>
                    <div className='clear-filter-inner'><ClearIcon/></div>
                </button>
                {/* <DefaultState/> */}
                {/* <FolderState folders={this.props.folders}/> */}
                <HistoryState />
            </div>
            <Sort/>
        </div>
        );
    }
}

export default Filter;