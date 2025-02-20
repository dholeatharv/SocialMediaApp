import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "./Navbar.css"; // Assuming you've already imported this

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const Logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      
      <div className="user-info">
        {user ? (
          <>
            <Link to="/createpost">Create post</Link>
            <p>{user.displayName}</p>
            <img src={user?.photoURL || ""} width="20" height="20" alt={user.displayName} />
            <button onClick={Logout} className="auth-button">Logout</button>
          </>
        ) : (
          <Link to="/login" className="auth-button">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;