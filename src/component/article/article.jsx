import { Link } from 'react-router-dom';
import './article.css';
import { BiTimeFive } from 'react-icons/bi';
import picture from '../../assets/images/download.jpg';
const Article = () => {
  const time = new Date();
  return (
    <div className='article__container'>
      <Link>
        <div>
          <img src={picture} alt='picture' />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, et!
        </p>
        <div className='article__date'>
          <BiTimeFive />
          <p>time</p>
        </div>
      </Link>
    </div>
  );
};

export default Article;
