import './header.css';
import logo from '../../../public/images/Engadget-logo.svg.png';
import headerHook from '../hooks/hooks';
import { FaGreaterThan } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const headerToggle = headerHook();

  const [click, setClick] = useState('none');
  return (
    <div className='header__container'>
      <div className='header__wrapper'>
        <div className='header__home'>
          <a href='/'>
            <img src={logo} alt='' />
          </a>
        </div>
        <div className='header__login'>
          <a href='/login'>Login</a>
        </div>
      </div>
      <div className='header__wrapper2' style={{ display: headerToggle }}>
        <div className='header__home'>
          <a href='/'>
            <img src={logo} alt='' />
          </a>
        </div>
        <div className='dropdown-menu'>
          <div className='dropdown-services'>
            <button
              type='select'
              onClick={() => {
                click === 'none' ? setClick('block') : setClick('none');
              }}
            >
              Sections
              <FaGreaterThan />
            </button>
          </div>
          <div className='dropdown-content' style={{ display: click }}>
            <a href=''>asd</a>
            <a href=''>asd</a>
            <a href=''>asd</a>
            <a href=''>asd</a>
            <a href=''>asd</a>
            <a href=''>asd</a>
            <a href=''>asd</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
