import React from 'react';
import './style.css';

export class Folder extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='container-inner'>
                    <h1 className='title'>{this.props.title}</h1>
                    <p>
                        {this.props.itemsCount} {this.props.count === 0 || this.props.count > 1 ? 'items' : 'item'}
                    </p>
                </div>
            </div>
        )
    }
}

Folder.defaultProps = {
    title: 'Unknown',
    count: 0
};

