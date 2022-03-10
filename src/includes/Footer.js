import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isSticky, setIsSticky] = useState(false);
  const checkHeight = () => {
    const documentHeight = document.body.scrollHeight;
    const windowHeight = document.body.clientHeight;
    console.log(documentHeight, windowHeight);

    if (documentHeight <= windowHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => checkHeight(), []);

  return (
    <footer className={isSticky ? 'footer sticky' : 'footer'}>
      <p>
        Copyright &copy; Kiley Mitti. All rights reserved.{' '}
        <Link to='/contact'>Get in Touch</Link>
      </p>
    </footer>
  );
};

export default Footer;
