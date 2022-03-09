import { AiFillStar, AiTwotoneFire, AiOutlineComment } from 'react-icons/ai';
import { BsFillCloudRainFill, BsGlobe2, BsWifi } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className='home p-0'>
      <div className='large-hero'>
        <img src='/images/hero-bg.jpg' alt='hero-background' />
        <div className='large-hero--content'>
          <h1 className='large-hero--title'>Kiley Mitti</h1>
          <h2 className='large-hero--subtitle'>Web Developer</h2>
          <p className='large-hero--more-info'>
            Bringing beautiful designs to life.
          </p>
          <p>
            <Button href='#' className='btn-orange'>
              View Resume
            </Button>
          </p>
        </div>
      </div>
      <div id='our-beginning'>
        <h2>The first trip we planned was our own.</h2>
        <h3>
          Ever since, we&rsquo;ve been working to make travel better for
          everyone.
        </h3>
        <img src='/images/first-trip.jpg' alt='Couple walking down a street.' />
        <img src='/images/our-start.jpg' alt='Our founder, Jane Doe' />
        <h2>Here&rsquo;s how we got started&hellip;</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, <a href='#'>quis nostrud exercitation</a> ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Duis aute irure dolor in <strong>reprehenderit in</strong> voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum velit esse cillum <strong>dolore eu fugiat.</strong>
        </p>
      </div>
      <div id='features'>
        <AiFillStar className='icon' />
        <h2>Our Features</h2>
        <BsFillCloudRainFill className='icon' />
        <h3>We&rsquo;ll Watch the Weather</h3>
        <p>
          Download our app and we&rsquo;ll send you a notice if it&rsquo;s about
          to rain in the next 20 minutes around your current location. A good
          rain can be refreshing, but sometimes you just want to stay dry.
        </p>
        <BsGlobe2 className='icon' />
        <h3>Global Guides</h3>
        <p>
          We&rsquo;ve scoured the entire planet for the best retreats and
          beautiful vistas. If there&rsquo;s a corner of the world you want to
          escape to we know the most scenic and inspiring locations.
        </p>
        <BsWifi className='icon' />
        <h3>Wi-Fi Waypoints</h3>
        <p>
          We only send you on trips to places we can personally vouch for as
          being amazing. Which means we&rsquo;ve mapped out where local wi-fi
          spots are and marked them in our app&rsquo;s map view.
        </p>
        <AiTwotoneFire className='icon' />
        <h3>Survival Kit</h3>
        <p>
          Everytime you book an escape with us we send you a survival kit with
          the finest materials. The kit will allow you to setup a tent, start a
          fire, scratch your own back and lower your taxes.
        </p>
      </div>
      <div id='testimonials'>
        <AiOutlineComment className='icon' />
        <h2>Real Testimonials</h2>

        <img src='/images/testimonial-jane.jpg' alt='jane' />
        <h3>Jane Doe</h3>
        <h3>9 Time Escaper</h3>
        <p>
          &ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.&rdquo;
        </p>

        <img src='/images/testimonial-john.jpg' alt='john' />
        <h3>John Smith</h3>
        <h3>4 Time Escaper</h3>
        <p>
          &ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum. Lorem ipsum dolor sit amet, consectetur.&rdquo;
        </p>

        <img src='/images/testimonial-cat.jpg' alt='cat' />
        <h3>Cat McKitty</h3>
        <h3>6 Time Escaper</h3>
        <p>
          &ldquo;Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut.&rdquo;
        </p>
      </div>
    </div>
  );
};

export default Home;
