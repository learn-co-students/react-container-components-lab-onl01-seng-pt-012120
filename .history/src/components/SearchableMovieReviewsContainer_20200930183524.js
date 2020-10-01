import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component{

    constructor(props){
        super(props)

        this.state = { 
            reviews: [],
            searchTerm: ""
        }
    }

    handleChange=(e)=>{
        this.setState({
            searchTerm: e.target.value
        })
    }
    
    dispSearchRev=(json)=>{
        const searchResults = json.results.map(review =><MovieReviews key={review.date_updated} review={review} /> )
        
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const searchBaseURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
        fetch(searchBaseURL+this.state.searchTerm).then(resp=>resp.json()).then(json=>dispSearchRev(json))
        console.log(this.state)
    }

    render(){
        return(
            < div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <input id='search-input' type='text' onChange={this.handleChange}/>
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;