import React from 'react';

const Navbar = () => {
    const Links = <>
        <ul className='flex gap-10'>
            <li>Home</li>
            <li>Listed Books</li>
            <li>Pages to Read</li>
        </ul>
    </>
    return (
        <>
            <div className='flex justify-between'>
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