import Article from '../article/article';
import './home.css';
const Home = () => {
  return (
    <div className='home__container'>
      <div className='home__left'>
        <Article />
      </div>
      <span className='home__devider'> </span>
      <div className='home__wrapper'>
        <Article />
      </div>
      <div className='home__right'>
        <Article />
      </div>
    </div>
  );
};

export default Home;
