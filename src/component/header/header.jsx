import './header.css';
import logo from '../../assets/images/Engadget-logo.svg.png';

const Header = () => {
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
    </div>
  );
};

export default Header;
