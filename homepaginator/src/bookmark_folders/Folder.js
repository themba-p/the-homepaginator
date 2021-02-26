import React from 'react';
import './style.css';

import Icon from '../icons/folder-icon.png';

class Folder extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='container-inner'>
                    <div className='folder-icon'>
                        <img src={Icon} alt=''/>
                    </div>
                    <h1 className='title'>{this.props.title}</h1>
                </div>
            </div>
        )
    }
}

Folder.defaultProps = {
    title: 'Unknown',
    count: 0
};

export default Folder;

