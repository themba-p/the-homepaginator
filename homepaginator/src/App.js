import React from 'react';

//import logo from './logo.svg';
import RandomID from './common';
import './App.css';
import { Search } from './search/Search.js';
import { Folders } from './bookmark_folders/Folders.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialFolders: _fakeFolders,
      folders: _fakeFolders,
      searchTerm: '',
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(e) {
    this.setState({searchTerm: e.target.value})
    let folders = this.state.initialFolders.slice();

    if (e.target.value) {
      let matches = folders.filter(c => c.title.toLowerCase().includes(e.target.value.toLowerCase()));
      folders = matches;
    }

     this.setState({folders: folders});
  }

  render() {
    return (
      <div className="App">
        <Search searchTerm={this.state.searchTerm}
                handleSearchChange={(e) => this.handleSearchChange(e)}/>
        <Folders items={this.state.folders}/>
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
