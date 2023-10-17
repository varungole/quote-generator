import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    axios.get('https://type.fit/api/quotes')
      .then((response) => {
        setQuotes(response.data);
        console.log(response);
      });
  }, []);

  const fetchQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }

  return (
    <div className="App">
      <h1>Quote Generator</h1>
      <section>
        <button onClick={fetchQuote}>New Quote</button>
        {quote && (
          <div>
            <h3>
              <span>"</span>
              {quote.text}
            </h3>
            <p><b>Author:</b>{quote.author}</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;