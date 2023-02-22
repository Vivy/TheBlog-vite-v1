import { Link } from 'react-router-dom';
import './article.css';
import { BiTimeFive } from 'react-icons/bi';
import picture from '../../../public/images/download.jpg';
import content from '../../../content';
import ArticleContent from '../articlelist/articlecontent';

const Article = () => {
  return (
    <div className='article__container'>
      {content.map((art) => (
        <ArticleContent art={art} />
      ))}
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
