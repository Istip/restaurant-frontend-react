import React from 'react';

const Loading = ({ loading }) => {
  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <h1>Loading...</h1>
      </div>
    );
  }
};

export default Loading;
