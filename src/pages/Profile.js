import { useEffect, useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../components/Loading';
import Images from '../components/Images';

const Profile = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    axios
      .get(
        `http://localhost:1337/api/restaurants/${id}?populate=openingHours,image`
      )
      .then((res) => {
        setRestaurant(res.data);
        setLoading(false);

        // 👇 can be removed soon
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading loading={loading} />;
  }

  if (!restaurant) {
    <h1>Ooups... Could not found the restaurant!</h1>;
  }

  return (
    <Container>
      <div className="text-center m-3">
        <Link to="/">
          <Button variant="secondary">« Go back to Restaurants</Button>
        </Link>
      </div>
      {restaurant && (
        <Container className="text-center mb-5">
          <h1>{restaurant.data.attributes.name}</h1>
          <h3>{restaurant.data.attributes.description}</h3>

          <Images images={restaurant.data.attributes.image.data} />

          <h3>OPEN:</h3>
          <Row>
            <Col>
              <h5>
                <b>{restaurant.data.attributes.openingHours.days}: </b>
              </h5>
            </Col>

            <Col>
              <h5>{restaurant.data.attributes.openingHours.hours}</h5>
            </Col>
          </Row>
        </Container>
      )}
    </Container>
  );
};

export default Profile;
