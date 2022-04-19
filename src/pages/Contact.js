import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './modules/Contact';
const Contact = () => {
  return (
    <Container className='page about'>
      <Row>
        <Col>
          <article className='about'>
            <h1 className='page--title'>Contact Me!</h1>
            <ContactForm />
          </article>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
