import React, {useEffect, useState} from 'react';
import axiosApi from '../../axiosApi';
import Spinner from '../Spinner/Spinner';
import {QuotesList} from '../../types';
import {useNavigate} from 'react-router-dom';
import QuotesItem from './QuotesItem';

const Quotes = () => {
  const [quotesList, setQuotesList] = useState<QuotesList[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axiosApi.get('quotes.json');
      const data = response.data;

      const quotesArray = Object.keys(data).map((quoteItem) => ({
        ...data[quoteItem],
      }));

      setQuotesList(quotesArray.reverse());
    } catch {
      navigate('*');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchData();
  }, []);

  console.log(quotesList);

  let quotes = (
    quotesList.map((postItem, i) => (
      <QuotesItem key={i} quoteData={postItem}/>
    ))
  );


  return (
    <div>
      <h3>All quotes</h3>
      {loading ? <Spinner/> : quotes}
    </div>
  );
};

export default Quotes;