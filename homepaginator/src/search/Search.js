import React from 'react';
import './style.css';

export class Search extends React.Component {
    render() {
        return (
            <div className='search-container'>
                <input type='search' 
                       placeholder={this.props.placeholder}
                       searchTerm={this.props.searchTerm}
                       onChange={(e) => this.props.handleSearchChange(e)}/>
            </div>
        )
    }
}

Search.defaultProps = {
    placeholder: 'Search',
}