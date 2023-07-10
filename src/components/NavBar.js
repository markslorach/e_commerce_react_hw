import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ basket }) => {
    
  const itemCount = basket.length;

  return (
    <nav>
    <div className='logo'>
      <h1>SkateShop.</h1>
    </div>
    <div>
      <ul>
        <li>
          <Link className='nav-links' to="/">Home</Link>
        </li>
        <li>
          <Link className='nav-links' to="/basket">Basket <span>({itemCount})</span></Link>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default NavBar;
