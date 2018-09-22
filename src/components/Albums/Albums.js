import React from 'react';
import SongCards from '../SongCards/SongCards';


const albums = (props) => {
		const songsList = props.songs.map(entries => {
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
		return(
			songsList
			);
		
}
export default albums