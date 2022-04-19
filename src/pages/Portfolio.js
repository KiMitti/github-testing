import { Container } from 'react-bootstrap';

const Portfolio = () => {
  return (
    <Container className='page'>
      <h1>Portfolio Page</h1>
      <article>
        <h2 className='mt-4'>Projects</h2>
        <p>
          Here are some other things I've worked on recently! Some of them
          showcase the code, others, my ability to work with clients or as a
          team to get things done.
        </p>
        <h3>Coming Soon!</h3>
      </article>
      <article>
        <h2 className='mt-4'>Other Projects</h2>
        <p>
          Here are some personal projects I'vbe worked on recently. Mostly these
          are larger scale theoretical sites I've used as learning tools.
        </p>
      </article>
    </Container>
  );
};

export default Portfolio;
