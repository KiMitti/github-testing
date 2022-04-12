import { Carousel } from 'react-bootstrap';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const slides = [
  {
    title: 'Jane Doe',
    subtitle: 'Best Comany 4U',
    content: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    image: '/images/testimonial-jane.jpg',
  },
  {
    title: 'John Smith',
    subtitle: 'Building Co.',
    content: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    image: '/images/testimonial-john.jpg',
  },
  {
    title: 'Cat McKitty',
    subtitle: 'Kitties Inc',
    content: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    image: '/images/testimonial-cat.jpg',
  },
  // { title: '', subtitle: '', content: '', image: '' },
];
const References = () => {
  return (
    <>
      <h2 className='text-center pt-5'>Awesome References</h2>
      <Carousel variant='dark' className='references' interval={10000}>
        {slides.map((slide, index) => {
          const { title, subtitle, content, image } = slide;
          return (
            <Carousel.Item key={index}>
              <div className='references--slide'>
                <div className='references--content'>
                  <img
                    src={image}
                    alt={title}
                    className='references--content--img'
                  />
                  <h3 className='references--content--title'>{title}</h3>
                  <h4 className='references--content--subtitle'>{subtitle}</h4>
                  <p className='references--content--text'>
                    <ImQuotesLeft className='icon references--icon left' />
                    {content}
                    <ImQuotesRight className='icon references--icon right' />
                  </p>
                </div>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default References;
