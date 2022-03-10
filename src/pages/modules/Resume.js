import { FiCode } from 'react-icons/fi';
import { FaScroll } from 'react-icons/fa';
import { MdOutlineSubject } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';
import { Button, Container, Row, Col } from 'react-bootstrap';
const Resume = () => {
  return (
    <Container className='resume pt-5'>
      <Row>
        <Col>
          <h2>
            <FaScroll className='icon icon--heading' />
            Summary
          </h2>
          <p className='resume--summary--text'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit cumque eligendi asperiores, quasi, quia eveniet sit
            dolores non harum deserunt cupiditate praesentium placeat veniam.
            Quae repudiandae id quisquam magnam tempore hic deleniti, iusto quo
            sit quia voluptatem, ab rerum unde?
          </p>
        </Col>
      </Row>
      <Row className='pt-4 resume'>
        <Col sm className='resume--skills--section pt-3'>
          <h2>
            <FiCode className='icon icon--heading' />
            Technical Skills
          </h2>
          <ul className='resume--skills--list'>
            <li>Lorem ipsum, dolor sit amet consectetur</li>
            <li>adipisicing elit. Obcaecati, voluptatum.</li>
            <li>Quod, perspiciatis quas earum cumque quaerat neque?</li>
            <li>
              Repellat mollitia temporibus accusamus, at eligendi omnis dolore
              nihil itaque deserunt consectetur eius magni. Sapiente, maxime?
            </li>
          </ul>
        </Col>
        <Col sm className='resume--skills--section pt-3'>
          <h2>
            <BsPeopleFill className='icon icon--heading' />
            Other Skills
          </h2>
          <ul className='resume--skills--list'>
            <li>Lorem ipsum, dolor sit amet consectetur</li>
            <li>adipisicing elit. Obcaecati, voluptatum.</li>
            <li>Quod, perspiciatis quas earum cumque quaerat neque?</li>
          </ul>
        </Col>
      </Row>
      <Row className='pt-4'>
        <Col>
          <h2>
            <MdOutlineSubject className='icon icon--heading' />
            Experience
          </h2>
          <article className='resume--experience--job'>
            <h3 className='resume--experience--job--heading'>
              FREELANCE WEB DEVELOPMENT • 2011-PRESENT
            </h3>
            <h4 className='resume--experience--job--subheading'>
              Key Clients: MyVirtualService, ImaginationPad,
              AccomplishMoreToday, Sizzling Studios
            </h4>
            <ul>
              <li>
                Developed responsive, SEO friendly, web standards compliant
                websites using HTML5, CSS3, Javascript, and PHP
              </li>
              <li>
                Created custom websites using bootstrap, Wordpress, Membergate,
                Shopify, and other content management systems (CMS).
              </li>
              <li>
                Facilitated communication between designers and framework
                engineers to fulfill client expectations.
              </li>
              <li>
                Recommended and implemented eCommerce solutions via Wordpress &
                Shopify
              </li>
              <li>Updated and maintained existing websites</li>
              <li>
                Supplied back-end support for items like Cpanel, DNS, PHP
                upgrade processes across a wide range of registrars hosts
              </li>
              <li>Provided technical support and guidance</li>
              <li>
                Produced easy to replicate style guidelines for future client
                use on CMS products.
              </li>
            </ul>
          </article>
          <article className='resume--experience--job'>
            <h3 className='resume--experience--job--heading'>
              WEB DEVELOPER • SIZZLING STUDIOS • 2006-2020
            </h3>
            <ul>
              <li>
                Developed responsive, SEO friendly Real Estate websites to
                client specifications
              </li>
              <li>Worked with designer to bring client concept to life</li>
              <li>
                Consulted directly with clients to determine their needs and
                translate them into technical specifications
              </li>
              <li>Updated and maintained sites as needed</li>
              <li>
                Created websites on Wordpress CMS and taught clients how to
                maintain their own content
              </li>
              <li>
                Integrated IDX solutions such as iHomefinder, IDXBroker, and
                DiverseSolutions
              </li>
              <li>Technical Support & Problem Solving</li>
            </ul>
          </article>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
