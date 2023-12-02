import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>

          <div className="nav-item fw-bold d-flex gap-2">
            <NavLink to="quotes" className="nav-link" href="#">Quotes</NavLink>
            <NavLink to="add-quote" className="nav-link" href="#">Submit new quote</NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;