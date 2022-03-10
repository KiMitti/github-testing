import { Carousel } from 'react-bootstrap';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
const References = () => {
  return (
    <>
      <h2 className='text-center pt-5'>Awesome References</h2>
      <Carousel variant='dark' className='references' interval={10000}>
        <Carousel.Item>
          <div className='references--slide'>
            <div className='references--content'>
              <img
                src='/images/testimonial-jane.jpg'
                alt='jane'
                className='references--content--img'
              />
              <h3 className='references--content--title'>Jane Doe</h3>
              <h4 className='references--content--subtitle'>Best Comany 4U</h4>
              <p className='references--content--text'>
                <ImQuotesLeft className='icon references--icon left' />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua.
                <ImQuotesRight className='icon references--icon right' />
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='references--slide'>
            <div className='references--content'>
              <img
                src='/images/testimonial-john.jpg'
                alt='john'
                className='references--content--img'
              />
              <h3 className='references--content--title'>John Smith</h3>
              <h4 className='references--content--subtitle'>Building Co.</h4>
              <p className='references--content--text'>
                <ImQuotesLeft className='icon references--icon left' />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Lorem ipsum dolor sit amet,
                consectetur.
                <ImQuotesRight className='icon references--icon right' />
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='references--slide'>
            <div className='references--content'>
              <img
                src='/images/testimonial-cat.jpg'
                alt='cat'
                className='references--content--img'
              />
              <h3 className='references--content--title'>Cat McKitty</h3>
              <h4 className='references--content--subtitle'>Kitties Inc</h4>
              <p className='references--content--text'>
                <ImQuotesLeft className='icon references--icon left' />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut.
                <ImQuotesRight className='icon references--icon right' />
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default References;
