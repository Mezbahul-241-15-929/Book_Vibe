import React from 'react';

import bookimage from "../../assets/books.jpg";

const Banner = () => {
    return (
        <div className='flex justify-between items-center p-16 w-full'>
            <div>
                 <h1>  dolor sit amet.</h1>
                 <button className='btn btn-primary'>Button</button>
            </div>
            <div>
                <img src={bookimage} alt="logo" />
            </div>
        </div>
    );
};

export default Banner;