import React from 'react';
import './style.css';
import ClearIcon from '../icons/Clear.js';

class Filter extends React.Component {
    render() {
        return (
            <div className='filter-container'>
                <div className='clear-filters-container'>
                    <button className='clear-filters-button'>
                        <ClearIcon />
                    </button>
                </div>
                <button className='filter-button active-filter'>
                    Today
                </button>
                <button className='filter-button'>
                    Yesterday
                </button>
                <button className='filter-button'>
                    This week
                </button>
            </div>
        );
    }
}

export default Filter;