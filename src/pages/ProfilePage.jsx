import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import "./styles/ProfilePage.css";

function ProfilePage() {
  return (
    <div className="profile-container">
      {/* Navbar akan tetap muncul di atas */}
      <Navbar />

      <div className="profile-details">
        <h1>Profile</h1>
        {/* Gunakan ProfileCard untuk menampilkan detail profil */}
        <ProfileCard
          avatar="/src/assets/images/avatar.jpg"
          username="Kim Dokja"
          email="dokja@gmail.com"
          phone="08123xxxx"
          location="Jl. xxxx"
        />
      </div>
    </div>
  );
}

export default ProfilePage;