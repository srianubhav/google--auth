import React, { useState } from "react";
import { auth, provider, signInWithPopup, signOut } from "./firebaseConfig";

import WelcomeScreen from "./Component/WelcomeScreen";
import LoginButton from "./Component/LoginButton";


function App() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser({
        name: result.user.displayName,
        email: result.user.email,
      });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="App">
      {user ? (
        <WelcomeScreen user={user} onLogout={handleLogout} />
      ) : (
        <LoginButton onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
