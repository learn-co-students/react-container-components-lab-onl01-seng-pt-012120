import React from 'react';

// const MovieReviews = (props) => <div className='review-list'>
// {props.reviews.map(r => <div>{r.display_title}</div>)}
// </div>
function MovieReviews(props) {
let r = props.reviews.map(x => {let r = JSON.stringify(x); return <div className='review'>{r}</div>})
    return (
        <div className='review-list'>
            {r}
        </div>
    )
}

export default MovieReviews