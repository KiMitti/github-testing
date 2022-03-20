import { useEffect, useState } from 'react';

const Footer = () => {
  const [isSticky, setIsSticky] = useState(false);
  const checkHeight = () => {
    const documentHeight = document.body.scrollHeight;
    const windowHeight = document.body.clientHeight;

    if (documentHeight <= windowHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => checkHeight());

  return (
    <footer className={isSticky ? 'footer sticky' : 'footer'}>
      <p>
        Copyright &copy; Kiley Mitti. All rights reserved.
        <a
          className='btn btn-orange btn-sm ms-3 me-3 mt-1'
          href='https://github.com/KiMitti/github-testing'
          target='_blank'
          rel='noreferrer'
        >
          Check the Code
        </a>
      </p>
    </footer>
  );
};

export default Footer;
