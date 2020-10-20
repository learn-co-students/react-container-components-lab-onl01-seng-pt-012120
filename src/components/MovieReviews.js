import React from 'react';

function MovieReviews(props) {
console.log(props)
    let reviews = props.reviews.map((x, index) => {let reviews = JSON.stringify(x); return <div key={index} className='review'>{reviews}</div>})
    return (
        <div className='review-list'>
            {reviews}
        </div>
    )
}

export default MovieReviews 