import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Container fluid className="bg-light d-flex justify-content-between p-3">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col>
            <Navbar.Brand href="/">BADASS Restaurants</Navbar.Brand>
          </Col>

          <Col className="d-flex justify-content-center">
            <Row>
              <Col>
                <Link to="/">HOME</Link>
              </Col>
              <Col>
                <Link to="/about">ABOUT</Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Navigation;
