import './articlelcontent.css';

const ArticleContent = ({ art }) => {
  console.log(art, 'this is art');
  return (
    <div>
      <div className='art__content'>
        <div className='art__wrapper'>
          <h1>{art.title}</h1>
          <h4>{art.subTitle}</h4>
          <img src={art.img[0]} alt='picture' />
          <div className='art__user'>
            <img src={art.user.profilePicture} alt='userpic' />
            <p>{art.user.name}</p>
            <p>{art.user.id}</p>
            <p>{art.creationDate}</p>
          </div>
          <div className='art__text'>
            {art.info.map((text) => (
              <p>{text}</p>
            ))}
          </div>
          <button className='art__btn'> View All Comments</button>
          <div className='art__tags'>
            {art.tag.map((tags) => (
              <a className='art__anchor' href=''>
                {tags}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
