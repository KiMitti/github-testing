import { Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className='large-hero'>
      <picture>
        <source srcSet='./images/hero-bg.jpg' media='(min-width: 992px)' />
        <source srcSet='./images/hero-bg-md.jpg' media='(min-width: 640px)' />
        <img
          src='./images/hero-bg-sm.jpg'
          alt='hero bg'
          className='large-hero--img'
        />
      </picture>
      <div className='large-hero--content'>
        <h1 className='large-hero--title'>Kiley Mitti</h1>
        <h2 className='large-hero--subtitle'>Web Developer</h2>
        <p className='large-hero--more-info'>
          Bringing beautiful designs to life.
        </p>
        <p>
          <Button href='#resume' className='btn-orange'>
            View Resume
          </Button>
        </p>
      </div>
    </div>
  );
};

export default Hero;
