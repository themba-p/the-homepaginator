import React from 'react';
import './stateStyle.css';
import {dateEnum} from '../common';

class HistoryState extends React.Component {
    render() {

        let filterEl = [
            {title: 'Today', date: dateEnum.Today},
            {title: 'Yesterday', date: dateEnum.Yesterday},
            {title: 'Week', date: dateEnum.Week},
        ];

        let className = '';
        
        return (
            <div className='filter-state-container'>
                <ul className='menu-nav'>
                    {
                        filterEl.map(el => {
                            if(this.props.currentDateFilter === el.date) {
                                className = 'filter-button-inner alt-filter-button-style filter-button-active';
                            } else {
                                className = 'filter-button-inner alt-filter-button-style';
                            }

                            return (
                                <button className='filter-button' onClick={() => this.props.onDateFilterChange(el.date)}>
                                    <div className={className}>
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

export default HistoryState;