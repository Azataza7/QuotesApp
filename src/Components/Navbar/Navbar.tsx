import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#"/>

          <div className="nav-item fw-bold d-flex gap-2">
            <NavLink to="/" className="nav-link" href="#">Quotes</NavLink>
            <NavLink to="add-quote" className="nav-link" href="#">Submit new quote</NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;