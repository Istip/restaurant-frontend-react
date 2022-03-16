import React from 'react';
import { Badge, Card, Col, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

const Restaurant = ({ restaurant }) => {
  return (
    <>
      <Col className="d-flex align-items-stretch justify-content-center g-4">
        <Card className="w-100">
          <Card.Header>
            <h3>{restaurant.attributes.name}</h3>
          </Card.Header>

          <Card.Body>
            <Card.Text>{restaurant.attributes.description}</Card.Text>

            <hr />

            <Card.Text className="text-muted">
              Average price: <b>${restaurant.attributes.avgPrice} / meal</b>
            </Card.Text>
          </Card.Body>

          <Card.Footer>
            <Card.Text className="mb-1">Categories:</Card.Text>
            {restaurant.attributes.categories.data.map((category) => (
              <Badge key={category.id} className="m-1">
                {category.attributes.name}
              </Badge>
            ))}

            <Link
              to={`/restaurants/${restaurant.id}`}
              className="d-grid my-2"
              style={{ textDecoration: 'none' }}
            >
              <Button variant="secondary">
                Explore <b>{restaurant.attributes.name}</b>
              </Button>
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
};

export default Restaurant;
