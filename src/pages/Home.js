import Hero from './modules/Hero';
import Resume from './modules/Resume';
import References from './modules/References';

const Home = () => {
  return (
    <div className='page pt-0'>
      <Hero />
      <Resume />
      <References />
    </div>
  );
};

export default Home;
