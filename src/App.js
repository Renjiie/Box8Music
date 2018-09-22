import React, { Component } from 'react';
import logo from './components/Logo/box8.png';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';
import Albums from './components/Albums/Albums';
import Scroll from './components/Scroll/Scroll';
import 'tachyons';
import emoji from 'emoji-dictionary';
import axios from 'axios';
class App extends Component {
      state = {
        show:false,
        songs : [],
      searchField: '',
      };


  componentDidMount() {
      axios.get(`https://itunes.apple.com/in/rss/topalbums/limit=100/json`)
      .then(response => 
        {this.setState({songs:response.data.feed.entry });
         });
    }

itunesPageLoader=()=>{
  this.setState({show:false})
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
        <footer className="pv4 ph3 ph5-m ph6-l red">
            <small className="f6 db tc">© 2018 <b className="ttu">Box8 Inc</b>., All Rights Reserved</small>
            <div className="tc mt3">
               {`Made with  ${emoji.getUnicode("purple_heart")} by Renjith`}
            </div>
        </footer>

        
      </div>
    );
  }
}

export default App;
