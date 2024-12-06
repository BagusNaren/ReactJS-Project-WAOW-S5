import React from "react";
import './styles/HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>WAOW</h1>
        <input type="text" placeholder="Search..." />
      </header>
      <section className="categories">
        <h2>Browse by Category</h2>
        <div className="category-grid">
          <div className="category-item">Adventure</div>
          <div className="category-item">Action</div>
          <div className="category-item">Horror</div>
        </div>
      </section>
      <footer>
        <h3>Subscribe to WAOW</h3>
        <form>
          <input type="email" placeholder="Your E-Mail Here" />
          <button>Submit</button>
        </form>
      </footer>
    </div>
  );
}

export default HomePage;