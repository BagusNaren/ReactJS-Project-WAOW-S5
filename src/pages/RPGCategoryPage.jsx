import React from "react";
import "./styles/RPGCategoryPage.css";

function RPGCategoryPage() {
  return (
    <div className="rpg-category-page">
      <h1>RPG Category</h1>
      <section className="hottest-article">
        <h2>Hottest Article</h2>
        <div className="carousel">
          <div className="carousel-item">
            <img src="/src/assets/images/article1.jpg" alt="Article 1" />
            <p>Cara Dapat Resonator Bintang 5 Xiangli Yao Secara Gratis di Wuthering Waves</p>
          </div>
          <div className="carousel-item">
            <img src="/src/assets/images/article2.jpg" alt="Article 2" />
            <p>Honkai: Star Rail Versi 2.7 Tampilkan Sunday dan Fugue, Simak Tanggal Rilis dan Fitur Terbaru</p>
          </div>
          <div className="carousel-item">
            <img src="/src/assets/images/article3.jpg" alt="Article 3" />
            <p>Sky: Children of the Light Tawarkan Petualangan Penuh Interaksi Sosial</p>
          </div>
        </div>
      </section>
      <section className="latest-article">
        <h2>Latest Article</h2>
        <div className="article-list">
          <div className="article-card">
            <img src="/src/assets/images/article4.jpg" alt="Infinity Nikki" />
            <p>Infinity Nikki PC System Requirements: Can your PC handle this whimsical adventure?</p>
          </div>
          <div className="article-card">
            <img src="/src/assets/images/article5.jpg" alt="Valorant" />
            <p>Game Valorant Tersedia di Konsol Xbox Series S/X dan PS5</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RPGCategoryPage;