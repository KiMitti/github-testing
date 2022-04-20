import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
const About = () => {
  return (
    <Container className='page about'>
      <Row>
        <Col>
          <article className='about'>
            <h1 className='page--title'>About Me</h1>
            <Image
              src='/images/kiley-kayak.jpg'
              className='float-md-end kiley-image'
            />
            <p>
              Hi! I'm Kiley Mitti. I've been in web development in some form or
              another for most of my life. In high school I worked part time as
              a site editor. That was in the long long ago when websites were
              built in tables and designed statically for 800x600 screens.
              Yikes! In college,{' '}
              <a
                href='https://sizzlingstudios.com'
                target='_blank'
                rel='noreferrer'
              >
                Sizzling Studios
              </a>{' '}
              gave me my first opportunity to develop websites from scratch and
              I've been doing that in some form or another ever since.
            </p>
            <p>
              I love puzzles and problem solving and that, above all else, is
              probably what keeps my development fires burning. I see each new
              design as a puzzle. It's fun to take a static design and put the
              pieces together to recreate it dynamic/interactive way. I approach
              learning new frameworks in the same way. I really like finding new
              tricks that make my projects cooler.
            </p>
            <p>
              In my free time I'm a fairly typical nerd. I've been a gamer since
              I was a kid playing Legend of Zelda with my dad, and Tetris on my
              own. (I'm still love both of those series, as well as a bunch of
              RPGs, puzzle games, roguelites, FPSs, survival, horror, and nearly
              any co-op my friends and I can get our hands on.) I love fantasy
              and sci-fi in all of its incarnations, from games to shows/movies,
              podcasts & books. My favorite authors include John Scalzi, Sir
              Terry Pratchett, Neil Gaimon, Douglas Adams and Brandon
              Sanderson.. I'm basically a big fan of any author who can inject a
              compelling story with humour and/or build an amazing universe.
            </p>
            <p>
              I also enjoy spending time outdoors. Kayaking and biking are my
              exercise of choice. Hiking is also fun when I live in a location
              that allows for it. Up until recently I lived on{' '}
              <a
                href='https://visitdrummondisland.com'
                rel='noreferrer'
                target='_blank'
              >
                Drummond Island
              </a>{' '}
              in Michigan. It's an awesome place for hiking, kayaking, and just
              being out in nature. I've also lived in Jacksonville FL, Atlanta
              GA, Chicago IL, and currently reside in Newton IA. I've got
              recommendations for biking, hiking, and walking locations in all
              of them. Just ask! ;-)
            </p>
            <p>
              So that's me. Obviously, I'm not a professional writer, but I like
              to read, code, game and chat. I'm a self-described introvert, but
              I've been told that I'm a great conversationalist. So if you have
              any questions for me<a href='/contact'> get in touch!</a>
            </p>
            <h2 className='mt-4'>About This Site</h2>
            <p>
              This site started out as a testing bed for various technologies
              and web practices I've been reviewing. And as of this moment, it
              still is MAINLY that. But, I wanted a site where I could showcase
              my resume and some of the projects I've done so I figured: why not
              kill two birds with one stone? So! Not only is this a place where
              I talk about myself, it's also a testing bed for various modern
              coding strategies (you can find a link to the github repository
              for that in the footer).
            </p>
            <p>
              Currently the site is based in React.js using React Router 6,
              SCSS, and React Bootstrap (which is based in Bootstrap 5 these
              days). It's hosted on netlify which autocompiles it from the
              github master repository which is super cool. It's probably a BIT
              more complex than it, strictly speaking, needs to be for such a
              simple site, but I figure it's good to practice for larger
              projects.
            </p>
          </article>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
