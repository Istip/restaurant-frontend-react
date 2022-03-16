import React from 'react';
import { Container } from 'react-bootstrap';
import Restaurant from './Restaurant';

const Restaurants = ({ restaurants }) => {
  return (
    <Container>
      {!restaurants ? (
        <h1>Loading...</h1>
      ) : (
        <Restaurant restaurants={restaurants} />
      )}
    </Container>
  );
};

export default Restaurants;
