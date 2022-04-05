import React from 'react';
import ReviewInfo from '../ReviewInfo/ReviewInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SlicedReview = ({ review }) => {
    const { comments, id, name, picture, ratings } = review;
    return (
        <div>

            <div className='slicedReview'>
                <img src={picture} height={50} width={50} style={{ borderRadius: '50%' }} alt="" />
                <p>User Name : {name}</p>
                <p><small>Comment : <br />{comments}</small></p>
                <p>Rattings :
                    <FontAwesomeIcon style={{ color: 'yellow' }} icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon style={{ color: 'yellow' }} icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon style={{ color: 'yellow' }} icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon style={{ color: 'yellow' }} icon={faStar}></FontAwesomeIcon>
                    <FontAwesomeIcon style={{ color: 'yellow' }} icon={faStar}></FontAwesomeIcon>
                    {ratings}</p>
            </div>
        </div>
    );
};

export default SlicedReview;