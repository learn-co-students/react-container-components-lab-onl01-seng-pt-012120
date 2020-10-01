import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import SearchableMovieReviewsContainer from './SearchableMovieReviewsContainer';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component{

    state = {
        reviews: []
    }

    fetchReviews(json){
        this.setState({
            reviews: json.results
        })
    }

    componentWillMount(){
        fetch(URL).then(resp => resp.json()).then(json => this.fetchReviews(json))
    }


    render(){
        const r = this.state.reviews.map(review=>(<MovieReviews key={review.date_updated} review={review}/>))
        return(
            <div className='latest-movie-reviews'>
                <SearchableMovieReviewsContainer reviews={this.reviews} handleChange={this.handleChange}/>
                {r}
            </div>
        )
    }
}

export default LatestMovieReviewsContainer;