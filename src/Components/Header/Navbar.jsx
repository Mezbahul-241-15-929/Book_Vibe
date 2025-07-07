import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    const Links = <>
        <ul className='flex gap-10'>
            
     
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
        </ul>
    </>
    return (
        <>
            <div className='flex justify-between text-black'>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
                {Links}
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;