import React, { useState } from 'react';
import './index.css';

function App() {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
  };

  return (
    <div class="flex items-center justify-center h-screen">
    <div class="bg-gray-100 p-4 rounded-lg shadow-lg text-center">
      <h1 class="text-3xl font-bold mb-4">Random Quote Generator</h1>
      <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={fetchQuote}>Generate Quote</button>
      <p class="text-lg mt-4">{quote}</p>
    </div>
  </div>
  

  );
}

export default App;
