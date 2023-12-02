import React, {useEffect, useState} from 'react';
import axiosApi from '../../axiosApi';
import Spinner from '../Spinner/Spinner';
import {Quote, QuotesList} from '../../types';
import {useNavigate, useParams} from 'react-router-dom';
import QuotesItem from './QuotesItem';

const Quotes = () => {
  const [quotesList, setQuotesList] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { category } = useParams();


  const fetchData = async () => {
    setLoading(true);

    try {
      let url = 'quotes.json';

      if (category) {
        url += `?orderBy="category"&equalTo="${category}"`
      }

      const response = await axiosApi.get(url);
      const data: QuotesList = response.data;

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
  }, [category]);

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