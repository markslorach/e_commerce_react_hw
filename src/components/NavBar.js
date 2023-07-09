import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ basket }) => {
    
  const itemCount = basket.length;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/basket">Basket ({itemCount})</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
