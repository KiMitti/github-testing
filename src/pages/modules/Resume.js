import { FiCode } from 'react-icons/fi';
import { FaScroll } from 'react-icons/fa';
import { MdOutlineSubject, MdOutlineSchool } from 'react-icons/md';
import { BsPeopleFill, BsDownload } from 'react-icons/bs';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
            Front-end Engineer with 18+ years of experience coding
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
            <li>Comprehensive knowledge of HTML5, CSS3, and Web Components</li>
            <li>Experienced with Javascript, TypeScript, Node.JS, and PHP</li>
            <li>Extensive experience expanding and maintaining a design system/web component codebase</li>
            <li>React, Angular, Stencil, Lit, Vue, JQuery</li>
            <li>RESTful API, GraphQL</li>
            <li>PostgreSQL, MySQL, Express, MongoDB, Apache, Docker, Kubernetes DNS, SSL Certificates</li>
            <li>AstroJs, Astro Design System, 11ty, WordPress, Shopify, MemberGate, cPanel</li>
            <li>Responsive Design, SEO Optimization, Accessibility Standards</li>
            <li>Git, VS Code, NPM, Selenium, Jest, Playwright, Cypress</li>
            <li>Github, gitLab, Argo</li>
            <li>Extensive experience expanding and maintaining a design system/web component codebase</li>
            <li>Skilled in debugging and testing web applications</li>
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
            <li>Tenacious Problem Solver</li>
            <li>Mentoring</li>
            <li>Customer Oriented</li>
            <li>Quick Study</li>
            <li>Aggresive Self Starter</li>
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
              FRONTEND ENGINEER • ROCKET COMMUNICATIONS, INC
              <span className='resume--experience--job--date'>
                2022 - Present
              </span>
            </h3>
            <ul>
              <li>
                Work with a team of UX designers and developers to create/maintain web components for the Astro Design System, the predominent design system in use by Space Force
              </li>
              <li>
                Contributed to the creation and enhancement of the AstroUXDS documentation website featuring a custom component playground.
              </li>
              <li>
                Work with industry experts in the Space/DoD industry to create accessible intuitive mission-critical applications and systems.
              </li>
              <li>
                Led prototyping efforts for government contractors, resulting in high client satisfaction due to responsive, high-quality, and efficient work.</li>
              <li>
                Developed sample applications using React, Angular, TypeScript, Stencil, and the Astro Design System to showcase our team's ability to make complex technologies user-friendly.
              </li>
              <li>
                Modernize legacy apps by improving the codebase, updating the tech stack, and enhancing the UX with current design principles.
              </li>
              <li>
                Maintained the company's website RocketCom.com, ensuring its functionality, performance, and content updates align with business goals.
              </li>
            </ul>
          </article>
          <article className='resume--experience--job'>
            <h3 className='resume--experience--job--heading'>
              FREELANCE WEB DEVELOPMENT
              <span className='resume--experience--job--date'>
                2011 - 2022
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
                Created custom websites using bootstrap, WordPress, MemberGate,
                Shopify, and other content management systems (CMS).
              </li>
              <li>
                Facilitated communication between designers and framework
                engineers to fulfill client expectations.
              </li>
              <li>
                Recommended and implemented eCommerce solutions via WordPress &
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
                Created websites on WordPress CMS and taught clients how to
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
            <p>Minors in Computer Science, Math & Psychology</p>
          </article>
          <article className='resume--experience--job'>
            <h3 className='resume--experience--job--heading'>
              Continuing Education via Udemy.com
            </h3>
            <h4 className='resume--experience--job--subheading'>Remote</h4>
            <p>
              Subjects include: React, Node, NPM, Jest, Next.js, TypeScript, Docker, Kubernetes and
              others
            </p>
          </article>
          <div className='text-center m-4'>
            <Link to='/contact' className='btn btn-primary'>
              Contact Me with Questions!
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
