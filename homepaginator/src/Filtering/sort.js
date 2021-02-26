import React from 'react';
import './style.css';
import SortIcon from '../icons/Sort.js';

class Sort extends React.Component {
    render() {
        return (
            <div className='sort-container'>
                <div className='sort-button'>
                    <SortIcon className='sort-icon'/>
                    <span>Recently added</span>
                </div>
            </div>
        );
    }
}

export default Sort;