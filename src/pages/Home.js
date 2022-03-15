import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Badge } from 'react-bootstrap';

const Home = () => {
  const [restaurants, setRestaurants] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get('http://localhost:1337/api/restaurants?populate=categories')
      .then((res) => {
        setRestaurants(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <center>
        <h1>Loading...</h1>
      </center>
    );
  }

  return (
    <Container>
      <h1>Home page</h1>
      <p>This is the Home page</p>

      <ul>
        {!restaurants ? (
          <h1>Loading...</h1>
        ) : (
          restaurants.data.map((restaurant) => (
            <li key={restaurant.id}>
              <h3>{restaurant.attributes.name}</h3>
              <small>
                Average price: <b>${restaurant.attributes.avgPrice} / meal</b>
              </small>
              <br />
              <p>{restaurant.attributes.description}</p>

              <ul>
                {restaurant.attributes.categories.data.map((category) => (
                  <Badge
                    bg="secondary"
                    key={category.id}
                    style={{ marginRight: '2px' }}
                  >
                    {category.attributes.name}
                  </Badge>
                ))}
              </ul>
              <br />
            </li>
          ))
        )}
      </ul>
    </Container>
  );
};

export default Home;
