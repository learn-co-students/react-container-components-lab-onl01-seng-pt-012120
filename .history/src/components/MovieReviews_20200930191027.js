// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props)=>{
    return(
        <div className='review-list'>
            <li className='review'>
            <b>{props.review.display_title}</b>
            {props.review.summary_short}
            </li>
        </div>
    )
}

export default MovieReviews;