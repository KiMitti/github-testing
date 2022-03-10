import { Container, Row, Col } from 'react-bootstrap';
const Contact = () => {
  return (
    <Container className='page about'>
      <Row>
        <Col>
          <article className='about'>
            <h1 className='page--title'>Contact Me!</h1>
            <p>This is going to contain various ways to get in touch.</p>
          </article>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
