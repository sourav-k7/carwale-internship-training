import React from "react";

export default function CarCard({ imgUrl, email, name }) {
  return (
    <div className="user-card">
        <span class="material-symbols-outlined dot-icon" >more_horiz</span>
      <div className="avatar">
        <img src={imgUrl} alt={name} />
      </div>
      <div className="profile">
        <div className="name">{name} </div>
        <div className="email">{email}</div>
      </div>
      <button>View Profile</button>
    </div>
  );
}
