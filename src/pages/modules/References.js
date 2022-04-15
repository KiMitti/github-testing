import { Carousel } from 'react-bootstrap';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { Link } from 'react-router-dom';

const slides = [
  {
    title: 'Sandy Teller',
    subtitle: 'CEO',
    content: `Kiley has been the premier Website builder for Sizzling Studios for over 15 years. Her work is excellent. She has superior communications skills, superior technical skills, and the ability to work with clients to understand their needs. Our clients have all been extremely happy with Kiley and her work. In addition to all of the above, she is very quick to understand what the clients want and respond to communications. She always produces Websites that please the Website owners.`,
    image: '/images/logos/ss-logo.png',
    url: 'https://sizzlingstudios.com',
  },
  {
    title: 'Joyce Wright',
    subtitle: 'Owner',
    content: `I do not have the coding expertise needed to customize my MemberGate client's websites. She looks at a website not only from a web developer's viewpoint but also from the website owners and users perspective. She makes it easy for me to edit the html so I can make changes for my clients going forward.  Kiley can discuss things with programmers and then explain it in layman's terms to me and the client so we can make decisions on how we want to move forward. I appreciate how responsive Kiley is and how she keeps me in the loop on the progress of a project.`,
    image: '/images/logos/amt-logo.png',
    url: 'https://www.accomplishmoretoday.com/',
    imgStyle: { width: '300px' },
  },
  {
    title: 'Barbara Weismann',
    subtitle: 'Broker, Sales Associate',
    content: `I've been very happily working with Kiley for around 15 years.  She's done the most amazing work - simply gorgeous website designs.  Plus Kiley is a delight to work with.  Additionally she's kept on top of my needs, advising me when it's time to update to a new technological platform.  I can't say enough good things about her.`,
    image: '/images/logos/bch-logo.png',
    url: 'https://bergencountyhomes.com/',
    imgStyle: { width: '450px' },
  },
  {
    title: 'Cat McKitty',
    subtitle: 'Kitties Inc',
    content: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    image: '/images/testimonial-cat.jpg',
    imgStyle: { borderRadius: '50%' },
  },
  // { title: '', subtitle: '', content: '', image: '', imgStyle:{} },
];
const References = () => {
  return (
    <div className='refs mt-5 pt-2 pb-5'>
      <h2 className='text-center pt-5'>Awesome References</h2>
      <Carousel variant='dark' className='references' interval={10000}>
        {slides.map((slide, index) => {
          const { title, subtitle, content, image, url, imgStyle } = slide;
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
                        style={imgStyle ? imgStyle : {}}
                      />
                    </a>
                  ) : (
                    <img
                      src={image}
                      alt={title}
                      className='references--content--img square'
                      style={imgStyle ? imgStyle : {}}
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
      <div className='text-center mb-4 mt-2'>
        <Link className=' btn btn-orange' to='/contact'>
          References available Upon Request
        </Link>
      </div>
    </div>
  );
};

export default References;
