import React from 'react';
import './stateStyle.css';
import Folder from '../bookmark_folders/Folder.js';

class FolderState extends React.Component {
    renderFolder(folder) {
        return (
        <Folder id={folder.id}
                title={folder.title}
                count={folder.count}/>)
    }

    render() {
        
        let folders = [];
        if(this.props.folders) {
            this.props.folders.map(folder => (
                folders.push(<li key={folder.id}>{this.renderFolder(folder)}</li>)
            ))
        }

        return(
            <div className='filter-state-container'>
                <ul className='menu-nav'>{folders}</ul>
            </div>
        );
    }
}

export default FolderState;