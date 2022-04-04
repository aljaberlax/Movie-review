import React from 'react';
import useReviews from '../../Hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';


const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    // 
    return (
        <div>
            <h1> Total Viewers Reviews: {reviews.length}</h1>
            {
                // reviews.map(reviewItem => <ReviewDetails key={reviewItem.id} reviewItem={reviewItem} ></ReviewDetails>)
            }

        </div>
    );
};

export default Reviews;