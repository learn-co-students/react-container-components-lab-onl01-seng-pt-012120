import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer  extends Component {
    constructor() {
      super();
   
      this.state = {
         reviews: []
      };
    }
    
componentDidMount(){ 
       
    fetch(URL, {
      method: "GET",
          })
        
        .then(response => response.json())
        .then(reviews=> {
         
          this.setState({
              reviews: reviews.results  
          })
        })
        .catch(errors => {
            console.log(errors)
  })
}




        render(){
            return (
                <div className="latest-movie-reviews">
                <h2>The Latest Reviews:</h2>
                  {
                      this.state.reviews.map(review => (<MovieReviews review={review}/>)  )
                    }
      
              </div>
               
            
            )
        }


  }

  export default LatestMovieReviewsContainer 

  //          <MovieReviews reviews={this.state.reviews} /> (line45)