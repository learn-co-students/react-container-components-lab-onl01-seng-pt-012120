// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props)=>{
    return(
        <div className='review-list'>
            <h3>{props.review.display_title}</h3>
            <p>{props.review.summary_short}</p>
        </div>
    )
}

export default MovieReviews;