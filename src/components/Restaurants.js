import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Restaurant from './Restaurant';

const Restaurants = ({ restaurants }) => {
  return (
    <Container>
      {!restaurants ? (
        <h1>Loading...</h1>
      ) : (
        <Row xs={1} sm={1} md={2} lg={3}>
          {restaurants.data.map((restaurant) => (
            <Restaurant key={restaurant.id} restaurant={restaurant} />
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Restaurants;
