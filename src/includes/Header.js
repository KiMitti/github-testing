import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { BsFillEnvelopeFill, BsGithub } from 'react-icons/bs';
import React from 'react';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenSize = () => {
    if (window.innerWidth >= 768) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    checkScreenSize();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => checkScreenSize());
    return () => window.removeEventListener('remove', () => checkScreenSize());
  });

  const key = useLocation().pathname;

  //return fullsize nav
  if (!isMobile) {
    return (
      <Navbar bg='dark' variant='dark'>
        <span className='header--logo'>
          Kiley <span className='header--logo--sub'>Mitti</span>
        </span>
        <Container>
          <Nav activeKey={key} className='ms-auto'>
            <Nav.Item>
              <Nav.Link href='/'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/about'>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href='/contact'>Contact</Nav.Link>
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
  }

  //return mobile nav
  return (
    <Navbar bg='dark' variant='dark' expand={false}>
      <Container fluid>
        <span className='header--logo'>
          Kiley <span className='header--logo--sub'>Mitti</span>
        </span>
        <Navbar.Toggle aria-controls='offcanvasNavbar' />
        <Navbar.Offcanvas
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
          placement='end'
        >
          <Offcanvas.Header closeButton closeVariant='white'>
            <Offcanvas.Title id='offcanvasNavbarLabel'>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Navbar bg='dark' variant='dark'>
              <Nav
                activeKey={key}
                className='flex-column justify-content-end flex-grow-1 pe-3'
              >
                <Nav.Item>
                  <Nav.Link href='/'>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/about'>About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='/contact'>Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <a href='mailto:email@kileymitti.com'>
                    <BsFillEnvelopeFill className='header--icon icon m-2' />
                  </a>
                  <a
                    href='https://github.com/KiMitti/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <BsGithub className='header--icon icon m-2' />
                  </a>
                </Nav.Item>
              </Nav>
            </Navbar>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
