import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'JZxCAW0HFG7bBxtkLvAm1R3l7iKJCcT1';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount(){
        fetch(URL)
        .then(response => response.json())
        .then(reviewData => this.setState({ reviews: reviewData.results}))
    }

    render(){
        return(
            <div className="latest-movie-reviews">
                <h1>Latest Movie Reviews</h1>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}

export default LatestMovieReviewsContainer