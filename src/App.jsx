import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";
import ArticleListPage from "./pages/ArticleListPage";
import HomePage from "./pages/HomePage";
import RPGCategoryPage from "./pages/RPGCategoryPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar akan muncul di semua halaman */}
        <Navbar />

        {/* Define routes for pages */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home sebagai halaman utama */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/dashboard" element={<DashboardPage />} /> {/* Tambahkan Dashboard */}
          <Route path="/articles" element={<ArticleListPage />} /> {/* Tambahkan Article List */}
          <Route path="/category/rpg" element={<RPGCategoryPage />} /> {/* Tambahkan RPG Category Page */}
          <Route path="/article-detail" element={<ArticleDetailPage />} /> {/* Tambahkan Article Detail Page */}
        </Routes>

        {/* Footer akan muncul di semua halaman */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;