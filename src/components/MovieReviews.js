import React from 'react';

const MovieReviews = (props) => {

    const renderReviews = () => {
        return props.reviews.map((review, index) => {
                return (
                    <div className='review' key={index}>
                        <h1>Movie: {review.display_title}</h1>
                        <h3>Reviewer: {review.byline}</h3>
                        <p>{review.summary_short}</p><br/>
                        <b>Critic pick: <i color= 'brown'>{review.critics_pick}</i></b>
                    </div>
                )
            }
            )
    }
    return (
        <div className= 'review-list'>
            {renderReviews()}
        </div>
    );
}

export default MovieReviews;

