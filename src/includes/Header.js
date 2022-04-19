import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { BsFillEnvelopeFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import React from 'react';

const navItems = [
  { title: 'Home', link: '/' },
  { title: 'Portfolio', link: '/portfolio' },
  { title: 'About', link: '/about' },
  { title: 'Contact', link: '/contact' },
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [show, setShow] = useState(false);

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
      <Navbar bg='dark' variant='dark' sticky='top'>
        <Container fluid>
          <span className='header--logo ms-3'>
            Kiley <span className='header--logo--sub'>Mitti</span>
          </span>

          <Nav activeKey={key} className='ms-auto me-5'>
            {navItems.map((item, index) => {
              const { title, link } = item;
              return (
                <Nav.Item key={index}>
                  <Nav.Link as={Link} to={link}>
                    {title}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>

          <a href='mailto:email@kileymitti.com'>
            <BsFillEnvelopeFill className='header--icon icon m-2' />
          </a>
          <a
            href='https://www.linkedin.com/in/kiley-mitti/'
            target='_blank'
            rel='noreferrer'
          >
            <BsLinkedin className='header--icon icon m-2' />
          </a>
          <a
            href='https://github.com/KiMitti/'
            target='_blank'
            rel='noreferrer'
          >
            <BsGithub className='header--icon icon m-2' />
          </a>
        </Container>
      </Navbar>
    );
  }

  //return mobile nav
  return (
    <Navbar bg='dark' variant='dark' expand={false} sticky='top'>
      <Container fluid>
        <span className='header--logo'>
          Kiley <span className='header--logo--sub'>Mitti</span>
        </span>
        <Navbar.Toggle
          aria-controls='offcanvasNavbar'
          onClick={() => setShow(true)}
        />
        <Navbar.Offcanvas
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
          placement='end'
          show={show}
          onHide={() => {
            setShow(false);
          }}
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
                {navItems.map((item, index) => {
                  const { title, link } = item;
                  return (
                    <Nav.Item key={index}>
                      <Nav.Link
                        as={Link}
                        to={link}
                        onClick={() => {
                          setShow(false);
                        }}
                      >
                        {title}
                      </Nav.Link>
                    </Nav.Item>
                  );
                })}
                <Nav.Item>
                  <a href='mailto:email@kileymitti.com'>
                    <BsFillEnvelopeFill className='header--icon icon m-2' />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/kiley-mitti/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <BsLinkedin className='header--icon icon m-2' />
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
