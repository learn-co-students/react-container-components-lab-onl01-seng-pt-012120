import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
 
    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }
 
  handleSearchTermChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  componentDidUpdate() {
      fetch(URL + `&query=${this.state.searchTerm}`)
        .then(response => response.json())
        .then(reviewData => this.setState({ reviews: reviewData.results }))
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(URL + `&query=${this.state.searchTerm}`)
    .then(response => response.json())
    .then(reviewData => this.setState({ reviews: reviewData.results }))
  }
  
  render() {
    return (
        <div className="searchable-movie-reviews">
            <form onSubmit={event => this.handleSubmit(event)}>
                <input type="text" name="searchTerm" onChange={event => this.handleSearchTermChange(event)} value={this.state.searchTerm} />
            </form>
            <div>
                <h2> Search Results</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        </div>
    )}
}
 
export default SearchableMovieReviewsContainer;
