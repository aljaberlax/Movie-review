import React from 'react';
import useReviews from '../../Hooks/useReviews';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
import'./Reviews.css'



const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    // 
    return (
        <div className='grid grid-cols-3'>
            <h1> Total Viewers Reviews: {reviews.length}</h1>
            <div className='reviewCart'>
            {
                reviews.map(reviewItem =><ReviewInfo key={reviewItem.id} reviewItem={reviewItem}></ReviewInfo>)
            }
            </div>

        </div>
    );
};

export default Reviews;