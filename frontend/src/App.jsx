import React, { useState } from 'react';
import ApiInput from './components/ApiInput';
import JsonResponse from './components/JsonResponse';
import RickImage from './components/RickImage';
import './App.css';

function App() {
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRandomCharacter = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Calling our Express backend which then calls the Rick & Morty API
      const response = await fetch('http://localhost:5000/api/character');
      
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      setResponseData(data);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to fetch character data. Make sure the backend server is running.');
      setResponseData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Rick & Morty API</h1>
      </header>

      <main className="app-main">
        <ApiInput onFetch={fetchRandomCharacter} isLoading={isLoading} />
        
        {error && <div className="error-message">{error}</div>}

        <div className="results-container">
          <JsonResponse responseData={responseData} />
          <RickImage imageUrl={responseData?.image} />
        </div>
      </main>
    </div>
  );
}

export default App;
