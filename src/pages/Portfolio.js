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
          Here are some personal projects I've worked on recently. These are
          alternative works that I've created in order to keep up to date on
          skills/technologies that I haven't otherwise have the opportunity to
          use recently.
        </p>
        <Projects list={learning} />
      </article>
    </Container>
  );
};

export default Portfolio;
