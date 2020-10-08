import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer  extends Component {
    state = {
        searchTerm: " ", 
        reviews: []
      };
    
    
    searchHandler = (event) =>{ 
        event.preventDefault()

        fetch(URL+ `&query=${this.state.searchTerm}`, {
          method: "GET",
              })
              .then(response => response.json())
              .then(reviews=> (
                
                this.setState({       
                    reviews: reviews.results
                })
              ))
              .catch(errors => {
                  console.log(errors)
        })}


        handleSearch=(event)=>{
            
            this.setState({
                searchTerm: event.target.value
            })
           
        }

        render(){
            
            return(
                <div className="searchable-movie-reviews"> 
                <h2>Search For Reviews</h2>
                <form onSubmit={this.searchHandler}>
                <input type="text" placeholder="search" onChange={this.handleSearch} />
                <input type="submit" value="search" />
                </form>
                    {
                        this.state.reviews.map(review => (<MovieReviews review={review}/>)  )
                    }
                </div>
            )
        }


  }

  export default SearchableMovieReviewsContainer 

  // <MovieReviews reviews={this.state.reviews}/> (came from line 52)