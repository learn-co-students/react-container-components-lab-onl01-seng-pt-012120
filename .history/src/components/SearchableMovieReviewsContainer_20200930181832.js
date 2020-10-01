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
        // const searchBaseURL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
        this.setState({
            searchTerm: e.target.value
        })
        debugger
    }

    onSubmit=(e)=>{
        e.preventDefault()
        
    }

    render(){
        return(
            < div className='searchable-movie-reviews'>
                <form onSubmit={this.onSubmit}>
                    <input type='text' onChange={this.handleChange}/>
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer;