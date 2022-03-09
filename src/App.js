import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home, About, Contact, Error } from './pages/index';
import { BsFillEnvelopeFill, BsGithub } from 'react-icons/bs';

function App() {
  return (
    <Container fluid>
      <Row>
        <Navbar bg='dark' variant='dark'>
          <span className='header--logo'>
            Kiley <span className='header--logo--sub'>Mitti</span>
          </span>
          <a href='#'>
            <BsFillEnvelopeFill className='header--icon icon m-2' />
          </a>
          <a href='#'>
            <BsGithub className='header--icon icon m-2' />
          </a>
          <Container>
            <Nav activeKey='/' className='ms-auto'>
              <Nav.Item>
                <Nav.Link href='/'>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-1' href='/about'>
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey='link-2' href='/contact'>
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <footer>
          <p>
            Copyright &copy; Kiley Mitti. All rights reserved.{' '}
            <Link to='/contact'>Get in Touch</Link>
          </p>
        </footer>
      </Row>
    </Container>
  );
}

export default App;
