import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    state = {
            reviews: []
        }

    componentDidMount() {
        fetch(URL) 
        .then(response => response.json())
        .then(review_data => this.setState({reviews: review_data.results}))
    }

    render() {
        // The LatestMovieReviewsContainer should have a top-level wrapping element with class latest-movie-reviews.
      return (
      <div className="latest-movie-reviews container" >
        LatestMovieReviewsContainer
        <MovieReviews reviews={this.state.reviews} />
       </div>)
    }

}

export default LatestMovieReviewsContainer;