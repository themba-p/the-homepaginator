import React from 'react';
import './style.css';
import SortIcon from '../icons/Sort.js';
import AddIcon from '../icons/Add.js';
import ImportIcon from '../icons/Import.js';

class Sort extends React.Component {
    render() {
        return (
            <div className='sort-container'>
                <div className='sort-button'>
                    <SortIcon className='sort-icon'/>
                    <span>Recently added</span>
                </div>
                <div className='sort-actions'>
                    <button className='add-button'><AddIcon/></button>
                    <button className='import-icon'>
                        <div>
                            <ImportIcon/>
                            <span>Import</span>
                        </div>
                    </button>
                </div>
            </div>
        );
    }
}

export default Sort;