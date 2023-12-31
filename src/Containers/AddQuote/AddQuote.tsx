import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {NewQuote, Quote} from '../../types';
import axiosApi from '../../axiosApi';
import Spinner from '../../Components/Spinner/Spinner';

const AddQuote: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(false);

  const [newQuote, setNewQuote] = useState<NewQuote>({
    author: '',
    category: '',
    text: '',
  });

  useEffect(() => {
    const fetchEditData = async () => {
      if (params.articleId) {
        setLoading(true);
        try {
          const response = await axiosApi.get(`quotes/${params.articleId}.json`)
          const fetchedQuote: Quote = response.data;
          setNewQuote(fetchedQuote);
        } catch (e) {
          console.log('Error' + e)
        } finally {
          setLoading(false)
        }
      }
    };
    void fetchEditData()
  }, [params.articleId]);

  const quoteChanged = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;

    setNewQuote(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (params.articleId) {
        await axiosApi.put(`quotes/${params.articleId}.json`, newQuote);
      } else {
        await axiosApi.post('quotes.json', newQuote);
      }
      navigate('/');
    } finally {
      setLoading(false);
    }
  };

  let form = (
    <form className="form" onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="author">Author:</label>
        <input
          id="author" type="text" name="author" required
          className="form-control"
          maxLength={100}
          onChange={quoteChanged}
          value={newQuote.author}
        />
      </div>
      <div className="form-group">
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          className="text-bg-light w-50"
          onChange={quoteChanged}
          value={newQuote.category}
        >
          <option value="" disabled hidden>Choose category</option>
          <option value="star-wars">Star Wars</option>
          <option value="motivational"> Motivational</option>
          <option value="famous-people">Famous people</option>
          <option value="saying">Saying</option>
          <option value="humour">Humour</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="text">Quote text:</label>
        <textarea
          id="text" name="text" required
          className="form-control text-area"
          onChange={quoteChanged}
          value={newQuote.text}
        />
      </div>
      <button className="btn btn-primary" type="submit">Save</button>
    </form>
  );

  if (loading) {
    form = <Spinner/>;
  }

  return (
    <div>
      {form}
    </div>
  );
};

export default AddQuote;