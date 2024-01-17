import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (

    <div className='ml-30 mt-1'>
      <Link  className="btn btn-outline btn-warning">Home</Link >
      <Link to ='/userlogin' className="btn btn-outline btn-warning m-2">Login User</Link >
      <Link to='/adminlogin'  className="btn btn-outline btn-warning">Login Admin</Link >
    </div>

  );
};

export default NavBar;