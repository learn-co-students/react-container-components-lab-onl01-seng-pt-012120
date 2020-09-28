import React from 'react';

let MovieReviews = (props) => {

  const reviewsArr = props.reviews.map((review, index) => {
    const src = review.multimedia ? review.multimedia.src : 'https://www.lookatourworld.com/wp-content/uploads/2018/08/No-Image-Provided-1.png'

    return(
      <div className="row my-4 border p-2" key={index}>
        <div className="review col">
          <h3>{review.headline}</h3>
          <h4>{review.display_title}</h4>

          <img src={src} alt="" />
          <p>{review.summary_short}</p>
          <a href={review.link.url} target="_blank">{review.link.suggested_link_text}</a>
        </div>
      </div>
    )
  })
  // return(
  //   <div className="row my-4 border p-2">
  //     <div className="review col">
  //       <h3>{props.headline}</h3>
  //       <h4>{props.display_title || 'test'}</h4>
  //       <img src={props.multimedia.src} alt="" />
  //       <p>{props.summary_short}</p>
  //       <a href={props.link.url} target="_blank">{props.link.suggested_link_text}</a>
  //     </div>
  //   </div>
  // )
  return(
    <div className="review-list">
      {reviewsArr}
    </div>
  )

}

export default MovieReviews