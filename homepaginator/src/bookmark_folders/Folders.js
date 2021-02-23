import React from 'react';
import './style.css';
import { Folder } from './Folder.js';

export class Folders extends React.Component {
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
                <header>
                    <h1>Folders</h1>
                </header>
                <ul>{folders}</ul>
            </div>
        );
    }
}