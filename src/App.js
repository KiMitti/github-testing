import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, About, Contact, Error } from './pages/index';
import { Header, Footer } from './includes';

function App() {
  return (
    <Container fluid>
      <Row>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
