import React from 'react';

const cards =(props) => {
	return(
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt ={props.key} src={props.image}/>
			<div>
				<h2>{props.title.slice(0,15)}</h2>
				<p>{props.artist.slice(0,15)}</p>
				<p>Price:{props.price}</p>
			</div>
		</div>
		);
}

export default cards;