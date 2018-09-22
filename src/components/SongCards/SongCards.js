import React,{ Component }  from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
class SongCards extends Component {
  state = {
      rating: 1
    };
  
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
 
  render() {
    const { rating } = this.state;
    
    return ( 
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 pointer' >
        
        <img  className="album-img" alt ={this.props.link} src={this.props.image}/>
        <div><a className='purple no-underline'href={this.props.link}>
            <h2>{this.props.title.slice(0,15)}</h2>
            <p>{this.props.artist.slice(0,15)}</p>
            <p>Price:{this.props.price}</p></a>
            <StarRatingComponent 
              name="rate1" 
              starCount={5}
              value={rating}
              onStarClick={this.onStarClick.bind(this)}
            />

            
            
          </div>
        </div>

    );
  }
}

export default SongCards;