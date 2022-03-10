import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>
        Copyright &copy; Kiley Mitti. All rights reserved.{' '}
        <Link to='/contact'>Get in Touch</Link>
      </p>
    </footer>
  );
};

export default Footer;
