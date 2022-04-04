import React from 'react';

const ReviewDetails = ({reviewItem}) => {
    const [id,picture,ratings,name,comments]=reviewItem;
    return (
        <div>
            {/* <img src={picture} alt="" />
            <h1>Viewrs Name: {name}</h1>
            <p>Comment: {comments}</p>
            <h4>Ratings: {ratings}</h4> */}
            this is review
            
        </div>
    );
};

export default ReviewDetails;