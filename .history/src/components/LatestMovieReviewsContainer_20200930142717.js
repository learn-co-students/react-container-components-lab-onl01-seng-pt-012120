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

    renderReviews(json){
        console.log(json)
    }

    componentDidMount(){
        fetch(URL).then(resp=>resp.json()).then(json=>renderReviews(json))
    }

    render(){
        const r = this.state.reviews.map(review=>(<MovieReviews review={review}/>))
        return(
            <div className='latest-movie-reviews'>
                {r}
            </div>
        )
    }
}

export default LatestMovieReviewsContainer;