import './header.css';

const Header = () => {
  return (
    <div className='header__container'>
      <div className='header__wrapper'>
        <div className='header__home'>
          <a href='/'>Home</a>
        </div>
        <div className='header__links'>
          <a href='/something1'>Something1</a>
          <a href='/something2'>Something2</a>
          <a href='/something3'>Something3</a>
        </div>
        <div className='header__login'>
          <img src='' alt='profile' />
          <p>Username</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
