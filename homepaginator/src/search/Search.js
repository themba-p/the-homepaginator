import React from 'react';
import './style.css'

export class Search extends React.Component {
    render() {
        return (
            <input type='search' placeholder={this.props.placeholder}/>
        )
    }
}

Search.defaultProps = {
    placeholder: 'Search',
}