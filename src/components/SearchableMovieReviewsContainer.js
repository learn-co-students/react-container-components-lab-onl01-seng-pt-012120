import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { reviews: [], searchTerm: '' }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.searchTermChange = this.searchTermChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        
        fetch(URL+`&query=${this.state.searchTerm}`)
                .then(resp => resp.json())
                .then(reviews => this.setState({reviews: reviews.results}))
                .catch(() => alert('an internal error occured'))
    }

    searchTermChange(event) {
        this.setState({searchTerm: event.target.value})
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
               <form onSubmit={this.handleSubmit}>
                <label htmlFor="query">Search by Movie:</label>
                <input type="search" name="query" id="query" value={this.state.searchTerm} onChange={this.searchTermChange}/>
                <input type="submit" value="Search"/>
               </form><br/>

               <MovieReviews reviews={this.state.reviews}/>
                
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;