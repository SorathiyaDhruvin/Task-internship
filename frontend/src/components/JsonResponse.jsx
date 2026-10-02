import React from 'react';

const JsonResponse = ({ responseData }) => {
  return (
    <div className="json-response-container">
      <h3 className="section-title">JSON</h3>
      <div className="json-box">
        {responseData ? (
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        ) : (
          <div className="empty-state">No data yet. Click Fetch!</div>
        )}
      </div>
    </div>
  );
};

export default JsonResponse;
