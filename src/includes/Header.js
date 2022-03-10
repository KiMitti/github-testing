import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsFillEnvelopeFill, BsGithub } from 'react-icons/bs';
import React from 'react';

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <span className='header--logo'>
        Kiley <span className='header--logo--sub'>Mitti</span>
      </span>
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
      <a href='mailto:email@kileymitti.com'>
        <BsFillEnvelopeFill className='header--icon icon m-2' />
      </a>
      <a href='https://github.com/KiMitti/' target='_blank' rel='noreferrer'>
        <BsGithub className='header--icon icon m-2' />
      </a>
    </Navbar>
  );
};

export default Header;
