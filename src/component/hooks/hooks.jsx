import { useEffect, useState } from 'react';

const headerHook = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    const manageHeader = () => {
      if (window.scrollY >= 100) {
        setHeader('flex');
      } else setHeader('');
    };
    window.addEventListener('scroll', manageHeader);
    return () => {
      window.removeEventListener('scroll', manageHeader);
    };
  }, []);
  return header;
};

export default headerHook;
