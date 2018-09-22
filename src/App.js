import React, { Component } from 'react';
import logo from './components/Logo/box8.png';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import Albums from './components/Albums/Albums';
import Scroll from './components/Scroll/Scroll';
import 'tachyons';
import axios from 'axios';
class App extends Component {
      state = {
        songs : [],
      searchField: '',
      };


  componentDidMount() {
      axios.get(`https://itunes.apple.com/in/rss/topalbums/limit=100/json`)
      .then(response => 
        {this.setState({songs:response.data.feed.entry });
         });
    }



onSearchChange=(event)=>{
    this.setState({searchField : event.target.value})
    
 }

   render(){

    const filteredSongs = this.state.songs.filter(song =>{
      return song.title.label.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    
return (

      <div className="App">

      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <SearchBox searchChange= {this.onSearchChange}/>
        <Scroll >
        <Albums songs={filteredSongs}/>
        </Scroll>

        
      </div>
    );
  }
}

export default App;
