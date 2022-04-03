import React from 'react';
import image from './Banner_image/bannar.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-details shadow-2xl'>
                <h1 style={{ color: 'red' }}>KGF Chapter 2</h1>
                <p> K.G.F: Chapter 2 is an upcoming Indian Kannada-language period drama action film written and directed by Prashanth Neel,
                    and produced by Vijay Kiragandur under the banner Hombale Films.
                    The second installment of the two-part series,
                    it is a sequel to the 2018 film K.G.F: Chapter 1.
                    The film stars Yash, Sanjay Dutt, Srinidhi Shetty,
                    Raveena Tandon and Prakash Raj.
                    Neel retained the technicians from its
                    predecessor with Bhuvan Gowda handling the
                    cinematography and Ravi Basrur scoring the music
                    for the soundtrack and the film's background.It is
                    the most expensive Kannada film with a budget of
                    ₹100 crore.The film is scheduled for a theatrical
                    release on 14 April 2022 in Kannada along with the
                    dubbed versions of Telugu, Hindi,
                    Tamil and Malayalam languages.
                </p>
                <a href="https://www.youtube.com/watch?v=hH-_Ne5myEs" target='_blank'><button className='shadow-2xl' style={{fontFamily:'fantasy',color:'red',fontSize:'20px' }}>Youtube LInk</button></a>
            </div>
            <div className='banner-image'>
                <img src={image} alt="" />
            </div>

        </div>
    );
};

export default Banner;