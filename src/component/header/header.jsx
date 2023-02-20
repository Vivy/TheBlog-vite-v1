import './header.css';

const Header = () => {
  return (
    <div className='header__container'>
      <div className='header__wrapper'>
        <div className='header__home'>Home</div>
        <div className='header__links'>
          <a href=''>Something1</a>
          <a href=''>Something2</a>
          <a href=''>Something3</a>
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
