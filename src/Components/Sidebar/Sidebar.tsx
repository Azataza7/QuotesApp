import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const categories = [
    { title: 'Star Wars', id: 'star-wars' },
    { title: 'Motivational', id: 'motivational' },
    { title: 'Famous people', id: 'famous-people' },
    { title: 'Saying', id: 'saying' },
    { title: 'Humour', id: 'humour' },
  ];

  const categoryLinks = [
    <Link to="quotes" key="all">
      All
    </Link>,
    ...categories.map((categoryItem) => (
      <Link to={`quotes/${categoryItem.id}`} key={categoryItem.id}>
        {categoryItem.title}
      </Link>
    )),
  ];



  return (
    <div className="sidebar-container container-fluid d-flex flex-column">
      {categoryLinks}
    </div>
  );
};

export default Sidebar;
