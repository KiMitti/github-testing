import { Container } from 'react-bootstrap';
import Projects from './modules/Projects';
import { clients, learning } from '../data/projects';

const Portfolio = () => {
  return (
    <Container className='page portfolio'>
      <h1>Portfolio</h1>
      <article className='mb-5'>
        <h2 className='mt-4'>Client Projects</h2>
        <p>
          Here are some client sites I've worked on/created! Some of them
          showcase the code, others, my ability to work with clients or as a
          team to get things done.
        </p>
        <Projects list={clients} />
      </article>
      <article className='mb-5'>
        <h2 className='mt-4 mb-4'>Other Projects</h2>
        <p>
          Here are some personal projects I've worked on recently. As you can
          see above, most of my client projects in recent years have been
          focused in a WordPress environment. These are alternative works that
          I've done with classwork or on my own, in order to brush up on/learn
          skills I haven't otherwise have the opportunity to use.
        </p>
        <Projects list={learning} />
      </article>
    </Container>
  );
};

export default Portfolio;
