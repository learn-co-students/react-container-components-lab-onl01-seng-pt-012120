// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props)=>{
return<div className='review-list'>{props.review.summary_short}</div>
}

export default MovieReviews;