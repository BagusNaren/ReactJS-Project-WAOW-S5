import React from "react";
import './styles/DashboardPage.css';

function DashboardPage() {
  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h1>WAOW</h1>
        <nav>
          <ul>
            <li>Dashboard</li>
            <li>Article List</li>
          </ul>
        </nav>
        <footer>
          <div className="profile">
            <img src="/src/assets/images/profile.jpg" alt="Profile" />
            <p>Kim Dokja</p>
            <p>Admin</p>
          </div>
          <button>Log out</button>
        </footer>
      </aside>
      <main className="dashboard-content">
        <header>
          <h2>Hi, Dokja</h2>
          <p>Welcome to Dashboard!</p>
          <p>Today, 21 November</p>
        </header>
        <section>
          <h3>Monthly Statistic</h3>
          {/* Placeholder for graph */}
        </section>
      </main>
    </div>
  );
}

export default DashboardPage;