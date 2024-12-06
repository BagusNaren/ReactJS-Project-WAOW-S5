import React from "react";
import "../styles/ProfileCard.css";

function ProfileCard({ name, email, phone, location }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default ProfileCard;