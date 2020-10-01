// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props)=>{
const titleSummary = props.reviews.map(rev=>{return(<li className='review'>{rev.display_title}</li>)})
    return(
        <div >
            <ul className='review-list'>
            {titleSummary}
            </ul>
        </div>
    )
}

export default MovieReviews;