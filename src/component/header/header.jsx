import './header.css';
import logo from '../../../public/images/Engadget-logo.svg.png';
import headerHook from '../hooks/hooks';
import { FaGreaterThan } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const headerToggle = headerHook();

  const [click, setClick] = useState('none');
  const [search, setSearch] = useState(false);
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
        <Link to='/login'> Login</Link>
        <label htmlFor='search' onClick={() => setSearch(!search)}>
          <BsSearch />
        </label>
        {search && (
          <div className='header__search'>
            <BsSearch />
            <input
              type='text'
              id='search'
              placeholder='What are you searching for?'
            />
            <AiOutlineClose onClick={() => setSearch(!search)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
