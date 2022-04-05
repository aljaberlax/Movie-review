import React from 'react';
import { useNavigate } from 'react-router-dom';
import './notfound.css'
const NoFound = () => {
    const navigate=useNavigate();
    const home=()=>{
        const path='/home';
        navigate(path);
    }
    return (
        <div className='notFound'>
            <h1>page not found</h1>
            <h1>404</h1>
            <br />
            <br />
            <h1>go to home <button onClick={home}>Home</button></h1>
        </div>
    );
};

export default NoFound;