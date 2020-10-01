// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props)=>{
    return(
        <div className='review-list'>
            <li className='review'>
            <h3>{props.review.display_title}</h3>
            <p>{props.review.summary_short}</p>
            </li>
        </div>
    )
}

export default MovieReviews;