import React, { useState } from 'react';

function App() {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
  };

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <button onClick={fetchQuote}>Generate Quote</button>
      <p>{quote}</p>
    </div>
  );
}

export default App;
