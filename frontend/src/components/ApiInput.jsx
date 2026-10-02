import React from 'react';

const ApiInput = ({ onFetch, isLoading }) => {
  return (
    <div className="api-input-container">
      <input
        type="text"
        className="api-url-input"
        value="https://rickandmortyapi.com/api/character/{random_id}"
        readOnly
      />
      <button 
        className="fetch-button" 
        onClick={onFetch} 
        disabled={isLoading}
      >
        {isLoading ? 'Fetching...' : 'Fetch!'}
      </button>
    </div>
  );
};

export default ApiInput;
