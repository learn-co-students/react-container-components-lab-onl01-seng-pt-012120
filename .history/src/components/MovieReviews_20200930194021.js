// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props)=>{
const titleSummary = props.reviews.map(rev=>{return(<li>{rev.display_title}</li>)})
    return(
        <div className='review-list'>
            <ul className='review'>
            {titleSummary}
            </ul>
        </div>
    )
}

export default MovieReviews;