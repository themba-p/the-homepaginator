import React from 'react';
import { filterStates } from '../common';
import ImportIcon from '../icons/Import.js';
import AddIcon from '../icons/Add.js';

class FilterHeader extends React.Component {
    render() {
        let actions = null;

        switch (this.props.currentState) {
            case filterStates.Default:
                actions = (
                    <button className='import-icon'>
                        <div>
                            <ImportIcon/>
                            <span>Import</span>
                        </div>
                    </button>
                )
                break;
            case filterStates.Folders:
            case filterStates.Pins:
                actions = <button className='add-button'><AddIcon/></button>
                break;
            default:
                break;
        }

        return (
            <div className='filter-header'>
                <h1 className='filter-header-title'>{this.props.currentState}</h1>
                <div className='filter-actions'>{actions}</div>
            </div>
        )
    }
}

export default FilterHeader;