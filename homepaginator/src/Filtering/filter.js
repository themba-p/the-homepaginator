import React from 'react';
import './style.css';
import Sort from './sort.js';
import { filterStates } from '../common';

import FilterHeader from './FilterHeader';
import DefaultState from './DefaultState';
import FolderState from './FolderState';
import HistoryState from './HistoryState'

import ClearIcon from '../icons/Clear.js';

class Filter extends React.Component {
    render() {
        let state = null;
        let sort = null;
        if(this.props.currentState === filterStates.Pins || 
            this.props.currentState === filterStates.Folders) {
            sort = <Sort/>
        }

        switch (this.props.currentState) {
            case filterStates.Default:
            case filterStates.MostViewed:
            case filterStates.Pins:
            default:
                state = <DefaultState currentState={this.props.currentState} 
                        onStateChange={(state) => this.props.onStateChange(state)}/>;
                break;
            case filterStates.Folders:
                state = <FolderState folders={this.props.folders}/>
                break;
            case filterStates.History:
                state = <HistoryState currentDateFilter={this.props.currentDateFilter} 
                        onDateFilterChange={(date) => this.props.onDateFilterChange(date)}/>
                break;
        }

        let clearButton = (this.props.currentState !== filterStates.Default) ?
        (
            <button className='clear-filter-button' onClick={() => this.props.onStateChange(filterStates.Default)}>
                <div className='clear-filter-inner'><ClearIcon/></div>
            </button>
        ) : null;
               
        return (
            <div className='filter-container'>
                <FilterHeader currentState={this.props.currentState}/>
                <div className='filter-container-inner'>
                    {clearButton}
                    {state}
                </div>
                {sort}
            </div>
        );
    }
}

export default Filter;