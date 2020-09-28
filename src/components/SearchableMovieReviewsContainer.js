import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Hereexport 
export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleSubmit = e => {
    e.preventDefault()

    fetch(URL + `&query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(json => this.setState({reviews: json.results}))
  }

  renderSearchForm = () => {
    return(
      <form onSubmit={this.handleSubmit} className="form-inline" >
        <input 
          type="text"
          className="form-control"
          placeholder="Search for Review"
          value={this.state.searchTerm}
          onChange={(e) => this.setState({searchTerm: e.target.value})}
        />
        <button type="submit" className="btn btn-secondary ml-2" >Search</button>
    </form>
    )
  }

  render() {
    return(
      <div className="searchable-movie-reviews container" >SearchableMovieReviewsContainer
        {this.renderSearchForm()}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}