import {Routes, Route} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import AddQuote from '../../Containers/AddQuote/AddQuote';
import QuotesList from '../../Containers/QuotesList/QuotesList';
import Sidebar from '../Sidebar/Sidebar';
import '../Componets.css';


const App = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="main">
        <aside className="sidebar">
          <Sidebar/>
        </aside>
        <div className="content">
          <Routes>
            <Route path="/" element={(
              <QuotesList/>
            )}/>
            <Route path="/category/:category" element={(
              <QuotesList/>
            )}/>
            <Route path="/add-quote" element={(
              <AddQuote/>
            )}/>
            <Route path="/quotes/:articleId/edit" element={(
              <AddQuote/>
            )}/>
            <Route path="*" element={(
              <div className="result-info">
                <h1>Result Not Found!</h1>
              </div>
            )}/>
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
