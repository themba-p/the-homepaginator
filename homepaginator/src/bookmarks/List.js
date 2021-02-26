import React from 'react';
import Bookmark from './Bookmark';
import './style.css';

class List extends React.Component {
    renderBookmark(bookmark) {
        return (
            <Bookmark isPinned={bookmark.isPinned}
                      title={bookmark.title}
                      favicon={bookmark.favicon}
                      url={bookmark.url}/>
        )
    }

    render() {
        let items = this.props.items.map((item, i) => (
           <li key={'bookmark' + i}>{this.renderBookmark(item)}</li>
        ))

        return (
            <ul className='bookmark-list'>{items}</ul>
        )
    }
}

export default List;