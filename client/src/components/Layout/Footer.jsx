import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <div className = "bg-gray-800 text-white p-3 footer-info ">
        <h1 className='text-center'>All Rights Reserved &copy; Khushi Roy</h1>
        <p className=" mt-2"></p>
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy</Link>
    </div>
  )
}

export default Footer