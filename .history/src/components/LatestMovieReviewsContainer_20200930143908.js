import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component{

    state = {
        reviews: []
    }

    fetchReviews(json){
        debugger
        this.setState({
            reviews: json
        })
    }

    componentDidMount(){
        debugger
        fetch(URL).then(resp => resp.json()).then(json => this.fetchReviews(json))
    }

    render(){
        // const r = this.state.reviews.map(review=>())
        return(
            <div className='latest-movie-reviews'>
                {/* {this.state.reviews} */}
            </div>
        )
    }
}

export default LatestMovieReviewsContainer;