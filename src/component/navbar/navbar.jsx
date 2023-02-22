import { BsSearch } from 'react-icons/bs';
import { AiOutlineClose, AiOutlineYoutube } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';
import { CiFacebook } from 'react-icons/ci';

import './navbar.css';
import { useState } from 'react';
import Dropdown from '../dropdown/dropdown';

const Navbar = () => {
  const [search, setSearch] = useState(false);

  return (
    <div className='navbar__container'>
      {!search && (
        <div className='navbar__links'>
          <div className='dropdown '>
            <button className='dropbtn'>Reviews</button>
            <div className='dropdown-content'>
              <a href=''>Reviews</a>
              <a href=''>Reviews</a>
              <a href=''>Reviews</a>
            </div>
          </div>
          <a href=''>Products</a>
          <Dropdown />
          <a href=''>Gear</a>
          <a href=''>Entertainment</a>
          <a href=''>Tomorrow</a>
          <a href=''>Deal</a>
          <a href=''>Buying Guides</a>
          <a href=''>Video</a>
          <a href=''>Podcasts</a>
          <div className='navbar__social-media'>
            <a href='https://youtube.com' target='_blank'>
              <AiOutlineYoutube />
            </a>
            <a href='https://twitter.com' target='_blank'>
              <FiTwitter />
            </a>
            <a href='https://facebook.com' target='_blank'>
              <CiFacebook />
            </a>
            <label htmlFor='search' onClick={() => setSearch(!search)}>
              <BsSearch />
            </label>
          </div>
        </div>
      )}
      {search && (
        <div className='navbar__search'>
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
  );
};

export default Navbar;
