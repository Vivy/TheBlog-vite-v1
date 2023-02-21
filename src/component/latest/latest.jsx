import Article from '../article/article';
import Newsletter from '../newsletter/newsletter';
import './latest.css';

const Latest = () => {
  return (
    <div className='latest__container'>
      <h1>The Latest</h1>
      <div className='latest__wrapper'>
        <div className='latest__article'>
          <Article />
          <Article />
          <Article />
        </div>
        <Newsletter />
      </div>
    </div>
  );
};

export default Latest;
