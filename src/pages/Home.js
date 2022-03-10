import { AiOutlineComment } from 'react-icons/ai';

import Hero from './modules/Hero';
import Resume from './modules/Resume';

const Home = () => {
  return (
    <>
      <Hero />
      <Resume />

      <div id='testimonials'>
        <AiOutlineComment className='icon' />
        <h2>References</h2>

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
