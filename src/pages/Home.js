import { AiFillStar, AiTwotoneFire, AiOutlineComment } from 'react-icons/ai';
import {
  BsFillCloudRainFill,
  BsGlobe2,
  BsWifi,
  BsPeopleFill,
} from 'react-icons/bs';

import Hero from './modules/Hero';
import Resume from './modules/Resume';

const Home = () => {
  return (
    <>
      <Hero />
      <Resume />

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
    </>
  );
};

export default Home;
