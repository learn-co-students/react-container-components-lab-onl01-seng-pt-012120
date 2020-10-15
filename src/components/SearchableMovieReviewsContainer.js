import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'JZxCAW0HFG7bBxtkLvAm1R3l7iKJCcT1';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews:[],
        searchTerm: ""
    }

    handleSubmit = event => {
        event.preventDefault()
        fetch(URL)
        .then(response => response.json())
        .then(reviewData => this.setState({reviews: reviewData.results}))

    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={event => this.handleSubmit(event)}>
                    <div class="form-group">
                        <label for="search">Enter search term...</label>
                        <input 
                          id="search"
                          type="text"
                          name="search"
                          onChange={this.handleChange}
                          value={this.state.searchTerm}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">Find Reviews</button>
                </form>
                <h1>Searched Moview Reviews</h1>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }

}

export default SearchableMovieReviewsContainer