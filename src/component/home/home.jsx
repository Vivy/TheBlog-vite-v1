import Article from '../article/article';
import './home.css';
const Home = () => {
  return (
    <div className='home__container'>
      <Article />
      <Article />
      <Article />
      <Article />
      <div className='home__wrapper'>
        <Article />
        <Article />
        <Article />
      </div>
      <Article />
      <Article />
    </div>
  );
};

export default Home;
