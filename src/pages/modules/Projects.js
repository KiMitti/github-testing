import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = ({ list }) => {
  return (
    <Container className='mt-5'>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {list.map((item) => {
          const { name, image, website, description, id, subtitle } = item;
          return (
            <Col key={id}>
              <Card>
                {image && (
                  <a href={website} target='_blank' rel='noreferrer'>
                    <Card.Img variant='top' src={image} />
                  </a>
                )}
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  {subtitle && (
                    <Card.Subtitle className='mb-2 text-muted'>
                      {subtitle}
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
