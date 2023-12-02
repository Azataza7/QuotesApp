import React from 'react';
import {Quote} from '../../types';
import {Link} from 'react-router-dom';

interface Props {
  quoteData: Quote;
  onDelete: () => void;
}

const QuotesItem: React.FC<Props> = ({quoteData, onDelete}) => {
  return (
    <div className="quote-block d-flex justify-content-between">
      <div className="quote-info">
        <p className="text">{quoteData.text}</p>
        <span className="author">Author: {quoteData.author}</span>
      </div>
      <div className="control-btn d-flex flex-column gap-2">
        <Link to={'/'} className="btn btn-danger delete-btn" onClick={onDelete}/>
        <Link to={`/quotes/${quoteData.id}/edit`} className="btn btn-secondary edit-btn"/>
      </div>
    </div>
  );
};

export default QuotesItem;