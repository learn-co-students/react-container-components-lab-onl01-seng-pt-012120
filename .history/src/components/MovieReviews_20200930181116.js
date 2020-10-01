// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props)=>{
    return(
        <div className='review-list'>
            <h3>{props.review.summary_short}</h3>
        </div>
    )
}

export default MovieReviews;