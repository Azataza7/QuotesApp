import React, {useEffect, useState} from 'react';
import axiosApi from '../../axiosApi';
import Spinner from '../Spinner/Spinner';
import {Quote} from '../../types';
import {useNavigate} from 'react-router-dom';
import QuotesItem from './QuotesItem';

const Quotes = () => {
  const [quotesList, setQuotesList] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axiosApi.get('quotes.json');
      const data = response.data;

      const quotesArray = Object.keys(data).map((quoteItem) => ({
        id: quoteItem,
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

  const handleDelete = async (quoteId: string) => {
    try {
      await axiosApi.delete(`quotes/${quoteId}.json`);
      await fetchData();
    } catch (error) {
      console.error('Error deleting quote:', error);
    }
  };

  let quotes = quotesList.map((quoteItem) => (
    <QuotesItem key={quoteItem.id} quoteData={quoteItem} onDelete={() => handleDelete(quoteItem.id)} />
  ));

  return (
    <div>
      <h3>All quotes</h3>
      {loading ? <Spinner/> : quotes}
    </div>
  );
};

export default Quotes;