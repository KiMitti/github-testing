import { Container, Row, Col } from 'react-bootstrap';
const About = () => {
  return (
    <Container className='page about'>
      <Row>
        <Col>
          <article className='about'>
            <h1 className='page--title'>About Me!</h1>
            <p>
              This is going to be some info about me! Maybe even a picture.
              Ewww..
            </p>
          </article>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
