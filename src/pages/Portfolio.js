import { Container } from 'react-bootstrap';
import Projects from './modules/Projects';

const clients = [
  {
    id: 'cl1',
    name: 'Kelley Rice',
    website: 'https://imaginationpad.com',
    description: `Kelley and her team are awesome designers I work with on the regular. Some time back she asked me to redesign her site. ImaginationPad is created on WordPress with a custom theme created from one of Kelley's awesome designs.`,
    image: './images/projects/imaginationpad.png',
    year: '2017',
  },
  // {
  //   id: '',
  //   name: '',
  //   website: '',
  //   description:
  //     '',
  //   image: '',
  // },
];

const Portfolio = () => {
  return (
    <Container className='page portfolio'>
      <h1>Portfolio</h1>
      <article>
        <h2 className='mt-4'>Client Projects</h2>
        <p>
          Here are some other things I've worked on recently! Some of them
          showcase the code, others, my ability to work with clients or as a
          team to get things done.
        </p>
        <Projects list={clients} />
      </article>
      <article>
        <h2 className='mt-4'>Other Projects</h2>
        <p>
          Here are some personal projects I've worked on recently. Mostly these
          are larger scale theoretical sites I've used as learning tools.
          <b>Coming Soon!</b>
        </p>
      </article>
    </Container>
  );
};

export default Portfolio;
