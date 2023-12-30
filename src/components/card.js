const NewsDetailCard = (props) => {
  const { article } = props;
  return (
    <div className="news-card">
      <div className="card-header">
        <div className="display-picture">
          <img src={article.urlToImage} alt="profile" />
        </div>
        <div className="author-details">
          <div>{article.author}</div>
          <div>{article.title}</div>
        </div>
      </div>
      <div className="card-details">
        <div>Lorem ipsum</div>
      </div>
      <div className="card-footer">
        <div>link to website</div>
        <div>link to content</div>
      </div>
    </div>
  );
};

export default NewsDetailCard;
