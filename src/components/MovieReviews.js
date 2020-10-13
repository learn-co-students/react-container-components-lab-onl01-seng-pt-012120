// Code MovieReviews Here
import React from 'react';


function MovieReviews(props) {
let r = props.reviews.map(x => {let r = JSON.stringify(x); return <div className='review'>{r}</div>})
    return (
        <div className='review-list'>
            {r}
        </div>
    )
}

export default MovieReviews