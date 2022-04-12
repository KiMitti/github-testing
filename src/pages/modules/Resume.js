import { FiCode } from 'react-icons/fi';
import { FaScroll } from 'react-icons/fa';
import { MdOutlineSubject, MdOutlineSchool } from 'react-icons/md';
import { BsPeopleFill, BsDownload } from 'react-icons/bs';
import { Container, Row, Col } from 'react-bootstrap';
const Resume = () => {
  return (
    <Container id='resume' className='resume pt-5'>
      <Row>
        <Col>
          <h1 className='page--title d-flex'>
            <span className='text-center flex-grow-1'>Resumé</span>
            <a
              href='/pdfs/kiley-mitti-resume.pdf'
              className='resume--download me-3'
              target='_blank'
              rel='noreferrer'
            >
              <BsDownload />
            </a>
          </h1>
          <h2>
            <FaScroll className='icon icon--heading' />
            Summary
          </h2>
          <p className='resume--summary--text'>
            Front-end Web Developer with 16+ years of experience coding
            responsive web applications and websites. Proficient in creating
            user interfaces, troubleshooting both simple and complex issues,
            translating business needs into technical solutions.
          </p>
        </Col>
      </Row>
      <Row className='pt-4 resume'>
        <Col sm className='resume--skills--section pt-3'>
          <h2>
            <FiCode className='icon icon--heading icon--orange' />
            Technical Skills
          </h2>
          <ul className='resume--skills--list'>
            <li>Responsive Design / SEO Optimization</li>
            <li>Comprehensive knowledge of HTML5, CSS3, and Web Components</li>
            <li>Experienced with Javascript, TypeScript, Node.JS, and PHP</li>
            <li>ReactJS, Bootstrap/React Bootstrap, JQuery</li>
            <li>RESTful API, GraphQL</li>
            <li>PostgreSQL, MySQL, Apache, DNS, SSL Certificates</li>
            <li>Wordpress, Shopify, Membergate, cPanel</li>
            <li>Git, VS Code, NPM, Selenium</li>
            <li>Experienced in debugging and testing web applications</li>
          </ul>
        </Col>
        <Col sm className='resume--skills--section pt-3'>
          <h2>
            <BsPeopleFill className='icon icon--heading icon--orange' />
            Other Skills
          </h2>
          <ul className='resume--skills--list'>
            <li>Interpreting technical requirements</li>
            <li>Attention to detail</li>
            <li>Strong communication skills</li>
            <li>Excellent interpersonal skills</li>
            <li>Ability to explain technical concepts at all levels</li>
            <li>Mentoring</li>
            <li>Customer oriented</li>
            <li>Quick Study</li>
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
              FREELANCE WEB DEVELOPMENT
              <span className='resume--experience--job--date'>
                2011 - PRESENT
              </span>
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
              WEB DEVELOPER • SIZZLING STUDIOS
              <span className='resume--experience--job--date'>2006 - 2020</span>
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
      <Row className='pt-4'>
        <Col>
          <h2>
            <MdOutlineSchool className='icon icon--heading' />
            Education
          </h2>
          <article className='resume--experience--job'>
            <h3 className='resume--experience--job--heading'>
              Bachelor Of Science: Cognitive Science
              <span className='resume--experience--job--date'>2001 – 2005</span>
            </h3>
            <h4 className='resume--experience--job--subheading'>
              Central Michigan University, Mount Pleasant, MI
            </h4>
            <p>Minors in Computer Science, math & psychology</p>
          </article>
          <article className='resume--experience--job'>
            <h3 className='resume--experience--job--heading'>
              Continuing Education via Udemy.com
              <span className='resume--experience--job--date'>
                2021 - Present
              </span>
            </h3>
            <h4 className='resume--experience--job--subheading'>Remote</h4>
            <p>Subjects include: React, Node, NPM, Jest, Next.js and others</p>
          </article>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
