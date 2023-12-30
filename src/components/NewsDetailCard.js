const NewsDetailCard = (props) => {
  const { article } = props;
  const formatedDate = new Date(article.publishedAt).toLocaleString()
  return (
    <div className="news-card">
      <div className="card-header">
        <div className="display-picture">
          <img src={article.urlToImage} alt="profile" />
        </div>
        <div className="author-details">
          <div className="author-name">{article.author}</div>
          <div className="author-title">{article.author} {article.author} {article.author}</div>
        </div>
      </div>
      <div className="card-details">
        <div className="article-title">{article.title}</div>
      </div>
        <div className="article-content">{article.content}</div>
      <div className="card-footer">
        <a href={article.url}>link to content</a>
        <div className="publish-details">pusblished at : {formatedDate}</div>
      </div>
    </div>
  );
};

export default NewsDetailCard;
