import React from 'react';

const ReviewInfo = ({reviewItem}) => {
    const {comments,id,name,picture,ratings}=reviewItem;
    console.log(reviewItem)
    return (
        <div className='CartInfo'>
            <img src={picture} height={50} width={50} style={{borderRadius:'50%'}} alt="" />
            <h5> Name: {name}</h5>
            <p>Comment: {comments}</p>
            <h4>Ratings: {ratings}</h4>
        </div>
    );
};

export default ReviewInfo;