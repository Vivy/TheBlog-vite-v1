import { Link } from 'react-router-dom';
import './article.css';
import { BiTimeFive } from 'react-icons/bi';
import picture from '../../assets/images/download.jpg';

const Article = () => {
  return (
    <div className='article__container'>
      <div>
        <Link to='/login'>
          <img src={picture} alt='picture' />
        </Link>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, et!</p>
      <div className='article__date'>
        <BiTimeFive />
        <p>time</p>
      </div>
    </div>
  );
};

export default Article;
