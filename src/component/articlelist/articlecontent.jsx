const ArticleContent = ({ art }) => {
  console.log(art, 'this is art');
  return (
    <div>
      <div className='art__content'>
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
        <div className='art__tags'>
          {art.tag.map((tags) => (
            <p>{tags}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleContent;
