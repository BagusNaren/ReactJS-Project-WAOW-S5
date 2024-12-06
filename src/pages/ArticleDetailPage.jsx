import React from "react";
import "./styles/ArticleDetailPage.css";
import articleImage from "../assets/images/article1.jpg";

function ArticleDetailPage() {
  return (
    <div className="article-detail-page">
      <h1>Cara Dapat Resonator Bintang 5 Xiangli Yao Secara Gratis di Wuthering Waves</h1>
      <div className="share-article">
        <button>Share Article</button>
      </div>
      <img src={articleImage} alt="Detail Article" className="article-image" />
    </div>
  );
}

export default ArticleDetailPage;