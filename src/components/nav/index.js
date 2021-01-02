import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/nav.css';

function Nav() {
  return (
    <nav className="navbar navbar-light bg-light mb-5 align-items-center">
      <Link className="navbar-brand" to="/">
        <img src="https://i.pinimg.com/originals/aa/91/ac/aa91ac9a54d09aacb9478f77dec187c5.jpg" 
        width="30" height="30" className="d-inline-block align-top" alt=""/>
        FindYourNewAnime
      </Link>

      
      <Link className="menu-about text-danger" to="/about"> 
        About
      </Link>
    </nav> 
  );
}

export default Nav;
