import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Restaurants from '../components/Restaurants';

const Home = () => {
  const [restaurants, setRestaurants] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(
        'http://localhost:1337/api/restaurants?populate=categories&fields=name,description,avgPrice'
      )
      .then((res) => {
        setRestaurants(res.data);
        setLoading(false);

        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }

  return <Restaurants restaurants={restaurants} />;
};

export default Home;
