import React from 'react';
import ReviewInfo from '../ReviewInfo/ReviewInfo';

const SlicedReview = ({ review }) => {
    const { comments, id, name, picture, ratings } = review;
    return (
        <div>

            <div className='slicedReview'>
                <img src={picture} height={50} width={50} style={{borderRadius:'50%'}} alt="" />
                <p>User Name : {name}</p>
                <p><small>Comment : <br />{comments}</small></p>
                <p>Ratings : {ratings}</p>
            </div>
        </div>
    );
};

export default SlicedReview;