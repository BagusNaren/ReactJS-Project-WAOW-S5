import React from "react";
import './styles/ArticleListPage.css';

function ArticleListPage() {
  return (
    <div className="article-list-container">
      <aside className="sidebar">
        <h1>WAOW</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Article List</li>
          </ul>
        </nav>
      </aside>
      <main>
        <header>
          <h2>List of Articles</h2>
          <input type="text" placeholder="Search..." />
        </header>
        <table>
          <thead>
            <tr>
              <th>Slug</th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th>View Count</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>tutorial-genshin</td>
              <td>Tutorial Genshin</td>
              <td>Adventure</td>
              <td>Publish</td>
              <td>38</td>
              <td>17/8/2024</td>
            </tr>
            <tr>
              <td>cara-menamatkan</td>
              <td>Cara Menamatkan</td>
              <td>Sport</td>
              <td>Draft</td>
              <td>0</td>
              <td>6/3/2024</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default ArticleListPage;