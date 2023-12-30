import { useState, useEffect } from "react";
import "./App.css";
import NewsDetailCard from "./components/NewsDetailCard";
import Header from "./components/Header";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchAllNewsDeatils();
  }, []);

  const fetchAllNewsDeatils = async () => {
    const data = await fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&from=2023-12-20&sortBy=popularity&apiKey=00f52fd303a742fcb00888b0984c15d1"
    );

    const result = await data.json();
    setArticles(result.articles);
  };

  return (
    <>
      <Header />
      <div className="App">
        {articles.map((article) => {
          return <NewsDetailCard key={article.publishedAt} article={article} />;
        })}
      </div>
    </>
  );
}

export default App;
