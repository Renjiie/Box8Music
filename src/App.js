import React, { Component } from 'react';
import logo from './components/Logo/box8.png';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import SongCards from './components/SongCards/SongCards';
import 'tachyons';
import axios from 'axios';

class App extends Component {
      state = {
    searchField: '',
    entries: []
  };



  componentDidMount() {


    axios.get(`https://itunes.apple.com/in/rss/topalbums/limit=100/json`)
      .then(response => 
        {this.setState({ entries: response.data.feed.entry });
      });

  }

 onSearchChange=(event)=>{
    this.setState({searchField : event.target.value})
    
  }
   render() {
      const songs = this.state.entries.map(entries => {
      return (

        <SongCards 
          key={entries.id.label} 
          artist={entries["im:artist"].label}
          image={entries["im:image"][2].label}
          link={entries.id.label}
          price={entries["im:price"].label}
          date={entries["im:releaseDate"].label}
          title={entries.title.label}
        />
      );
    });
    return (
      <div className="App">
      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <SearchBox searchChange= {this.onSearchChange}/>
        {songs}

        
      </div>
    );
  }
}

export default App;
