import React from 'react';
import { Carousel } from 'react-bootstrap';

const Images = ({ images }) => {
  return (
    <div className="my-5">
      <Carousel>
        {images.map((image) => (
          <Carousel.Item key={image.id}>
            <img
              className="d-block w-100"
              src={`http://localhost:1337${image.attributes.url}`}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <br />
    </div>
  );
};

export default Images;
