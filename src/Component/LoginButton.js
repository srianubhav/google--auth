import React from "react";

const LoginButton = ({ onLogin }) => {
  return (
    <div className="login-screen">
      <button className="login-btn" onClick={onLogin}>
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginButton;
