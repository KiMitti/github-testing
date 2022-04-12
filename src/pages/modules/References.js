import { Carousel } from 'react-bootstrap';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const slides = [
  {
    title: 'Sandy Teller',
    subtitle: 'CEO',
    content: `Kiley has been the premier Website builder for Sizzling Studios for over 15 years. Her work is excellent. She has superior communications skills, superior technical skills, and the ability to work with clients to understand their needs. Our clients have all been extremely happy with Kiley and her work. In addition to all of the above, she is very quick to understand what the clients want and respond to communications. She always produces Websites that please the Website owners.`,
    image: '/images/logos/ss-logo.png',
    url: 'https://sizzlingstudios.com',
  },
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
          const { title, subtitle, content, image, url } = slide;
          return (
            <Carousel.Item key={index}>
              <div className='references--slide'>
                <div className='references--content'>
                  {url ? (
                    <a href={url} target='_blank' rel='noreferrer'>
                      <img
                        src={image}
                        alt={title}
                        className='references--content--img square'
                      />
                    </a>
                  ) : (
                    <img
                      src={image}
                      alt={title}
                      className='references--content--img square'
                    />
                  )}
                  <h3 className='references--content--title'>{title}</h3>
                  <h4 className='references--content--subtitle'>{subtitle}</h4>
                  {url && (
                    <span className='pb-2 d-block'>
                      <a href={url} target='_blank' rel='noreferrer'>
                        Visit Site
                      </a>
                    </span>
                  )}
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
