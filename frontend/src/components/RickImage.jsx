import React from 'react';

const RickImage = ({ imageUrl }) => {
  return (
    <div className="rick-image-container">
      <h3 className="section-title">IMAGE</h3>
      <div className="image-box">
        {imageUrl ? (
          <img src={imageUrl} alt="Rick & Morty Character" className="rick-image" />
        ) : (
          <div className="empty-state">No image yet. Click Fetch!</div>
        )}
      </div>
    </div>
  );
};

export default RickImage;
