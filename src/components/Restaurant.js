import React from 'react';
import { Badge, Card, Col, Row } from 'react-bootstrap';

const Restaurant = ({ restaurants }) => {
  return (
    <Row xs={1} sm={1} md={2} lg={3}>
      {restaurants.data.map((restaurant) => (
        <Col
          key={restaurant.id}
          className="d-flex align-items-stretch justify-content-center g-4"
        >
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
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Restaurant;
