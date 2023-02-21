import './newsletter.css';

const Newsletter = () => {
  return (
    <div className='newsletter__container'>
      <h3>We have two newsletters, why not sign up for both?</h3>
      <div className='newsletter__wrapper'>
        <div className='newsletter__left'>
          <div>
            <input type='checkbox' /> Engadget Deals
          </div>
          <p>A weekly roundup of our favorite tech deals</p>
          <div>
            <input type='checkbox' /> The Morning After
          </div>
          <p>A weekly roundup of our favorite tech deals</p>
          <div className='newsletter__links'>
            <a href=''>Apple Podcasts</a>
            <span>|</span>
            <a href=''>Spotify</a>
            <span>|</span>
            <a href=''>Google Play</a>
            <span>|</span>
            <a href=''>iHeart Radio</a>
          </div>
        </div>
        <span className='newsletter__divider'></span>
        <div className='newsletter__right'>
          <p>Just enter your email and we`ll take care of the rest: </p>
          <input type='email' placeholder='address@email.com' />
          <button className='newsletter__btn'> Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
