import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = ({ list }) => {
  return (
    <Container>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {list.map((item) => {
          const { name, image, website, description, id, year } = item;
          return (
            <Col key={id}>
              <Card>
                {image && <Card.Img variant='top' src={image} />}
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  {year && (
                    <Card.Subtitle className='mb-2 text-muted'>
                      {year}
                    </Card.Subtitle>
                  )}
                  <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    variant='primary'
                    href={website}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Visit Website
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Projects;
