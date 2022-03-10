const About = () => {
  return (
    <article className='about'>
      <h1>About Me!</h1>
      <picture>
        <source
          srcSet='./images/hero--large-i.jpg'
          media='(min-width: 1200px)'
        />
        <source
          srcSet='./images/hero--medium-i.jpg'
          media='(min-width: 992px)'
        />
        <source
          srcSet='./images/hero--small-i.jpg'
          media='(min-width: 768px)'
        />
        <img src='./images/hero--smaller-i.jpg' alt='source test' />
      </picture>
      <img
        srcSet='./images/hero--smaller-i.jpg 640w, ./images/hero--small-i.jpg 990w, /images/hero--medium-i.jpg 1380w, ./images/hero--large-i.jpg 1920w'
        alt='stuff'
      />
    </article>
  );
};

export default About;
