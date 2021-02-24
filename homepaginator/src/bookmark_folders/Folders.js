import React from 'react';
import './style.css';
import Folder from './Folder.js';

class Folders extends React.Component {
    renderFolder(folder) {
        return (
        <Folder id={folder.id}
                title={folder.title}
                count={folder.count}/>)
    }

    render() {
        let folders = this.props.items.map(folder => (
            <li key={folder.id}>{this.renderFolder(folder)}</li>
        ))

        return(
            <div className='folders-container'>
                <ul>{folders}</ul>
            </div>
        );
    }
}

export default Folders;