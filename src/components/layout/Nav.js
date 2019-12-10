import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg' id='anchor'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          GitFind.
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
