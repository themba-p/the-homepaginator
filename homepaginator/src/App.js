import React from 'react';

//import logo from './logo.svg';
import { RandomID } from './common';
import './App.css';

// Components
import Search from './search/Search.js';
import List  from './bookmarks/List.js';
import Filter from './Filtering/filter.js';

// Fake data
import { BrowserHistory } from './data/BrowserHistory.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialFolders: _fakeFolders,
      folders: _fakeFolders,
      bookmarksInitial: BrowserHistory,
      browserHistory: BrowserHistory,
      searchTerm: '',
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    this.setState({searchTerm: e.target.value})
    let folders = this.state.initialFolders.slice();
    let bookmarks = this.state.bookmarksInitial.slice();

    if (e.target.value) {
      let _folders = folders.filter(c => c.title.toLowerCase().includes(e.target.value.toLowerCase()));
      folders = _folders;

      let _bookmarks = bookmarks.filter(c => c.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
                                             c.url.toLowerCase().includes(e.target.value.toLowerCase()));
      bookmarks = _bookmarks;
    }

     this.setState({
       folders: folders,
       browserHistory: bookmarks,
      });

    
  }

  render() {
    return (
      <div className="App">
        <div className='main-content'>
          <Search searchTerm={this.state.searchTerm}
                  handleSearchChange={(e) => this.handleSearchChange(e)}/>
          
          <Filter folders={this.state.folders}/>
          <List items={this.state.browserHistory}/>

        </div>
      </div>
    );
  }
}

export default App;

//Fake data for the time-being
let _fakeFolders = [
  { id: RandomID(), title: 'Design', count: 47 },
  { id: RandomID(), title: 'Develop', count: 28 },
  { id: RandomID(), title: 'My bookmarks', count: 103 },
  { id: RandomID(), title: 'Anime', count: 93 }
]
