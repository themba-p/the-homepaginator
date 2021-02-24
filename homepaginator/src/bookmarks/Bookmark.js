import React from 'react';
import './style.css';

// icons
import PinIcon from '../icons/Pin';
import UnpinIcon from '../icons/Unpin';
import MoreIcon from '../icons/More';

class Bookmark extends React.Component {
    render() {
        let pinVal = (this.props.isPinned) ? 
        <button id='unpin-button' className='pin-button'><UnpinIcon/></button> :
        <button id='pin-button' className='pin-button'><PinIcon/></button>;
        
        return (
            <div className='b-container'>
                <div className='pin-container'>{pinVal}</div>
                <div className='favicon'>
                    <img src={this.props.favicon} alt=''/>
                </div>
                <div className='b-title-container'>
                <p className='b-title'>{this.props.title}</p>
                </div>
                <p className='url'>{this.props.url}</p>
                <button className='options-button'><MoreIcon/></button>
            </div>
        )
    }
}

export default Bookmark;