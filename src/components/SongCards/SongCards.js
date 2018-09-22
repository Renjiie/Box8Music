import React from 'react';
import './SongCards.css';

const cards =(props) => {
	return(
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 pointer' >
			
			<img  className="album-img" alt ={props.link} src={props.image}/>
			<div><a className='purple no-underline'href={props.link}>
				<h2>{props.title.slice(0,15)}</h2>
				<p>{props.artist.slice(0,15)}</p>
				<p>Price:{props.price}</p>
				</a>
				
			</div>
		</div>
		);
}

export default cards;