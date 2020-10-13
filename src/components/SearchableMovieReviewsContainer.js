import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviews extends Component {
state = {
    reviews: [],
    searchTerm: ""
};

changeHandler = (e) => {
    this.setState({ searchTerm: e.target.value })
}

submitHandler = (e) => {
    e.preventDefault()
    fetch(URL + `&query=${this.state.searchTerm}`)
    .then(r => r.json())
    .then(json => this.setState({reviews: json.results}))
    this.setState({ searchTerm: "" })
}

render() {
    return (
        <div className='searchable-movie-reviews'>
            <form onSubmit={this.submitHandler}>
                <input type='text' value={this.state.searchTerm} onChange={this.changeHandler} />
                <input type='submit' value='search' />
            </form>
            <MovieReviews reviews={this.state.reviews} />
        </div>
    )
}
        
}
