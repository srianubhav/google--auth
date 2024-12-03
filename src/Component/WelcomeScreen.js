import React from "react";

const WelcomeScreen = ({ user, onLogout }) => {
  return (
    <div className="welcome-screen">
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <button className="logout-btn" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default WelcomeScreen;
