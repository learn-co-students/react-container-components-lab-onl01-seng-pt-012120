// Code MovieReviews Here
import React from "react";


const MovieReviews = ({review})=> { 
    return (
   <div>
    <h2>{review.display_title}</h2>
    <p>Summary: {review.summary_short}</p>
     </div>)
     
}

// const MovieReviews = ({reviews}) => 
//    <div>
//     {reviews.map(MapReviews)}
//     </div>


MovieReviews.defaultProps = {
    reviews: []
}




export default MovieReviews