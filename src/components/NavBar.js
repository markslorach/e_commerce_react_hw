import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ basket }) => {
    
  const itemCount = basket.length;

  return (
    <nav>
    <div className='logo'>
      <h1>SkateShop.</h1>
    </div>
    <div className='nav-links'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/basket">Basket ({itemCount})</Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default NavBar;
