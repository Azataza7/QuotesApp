import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const categories = [
    { title: 'All', id: 'all' },
    { title: 'Star Wars', id: 'star-wars' },
    { title: 'Motivational', id: 'motivational' },
    { title: 'Famous people', id: 'famous-people' },
    { title: 'Saying', id: 'saying' },
    { title: 'Humour', id: 'humour' },
  ];

  const categoryLinks = categories.map((categoryItem) => (
    <Link
      to={categoryItem.id === 'all' ? '/' : `/category/${categoryItem.id}`}
      key={categoryItem.id}
    >
      {categoryItem.title}
    </Link>
  ));

  return (
    <div className="sidebar-container container-fluid d-flex flex-column">
      {categoryLinks}
    </div>
  );
};

export default Sidebar;
