// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { LogoutButton } from "./LogoutButton";

export const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);   // useState to keep track of user's login status

    useEffect(() => {
        const token = localStorage.getItem("token");    // Check if there's a token in localStorage
        setIsLoggedIn(!!token);   // Set isLoggedIn to true if token exists, false otherwise
    }, []);
// updated nabvar using button component
    return (

        <nav className="top-navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/posts">Feed</Link></li>
                <li><Link to="/my-profile">Profile</Link></li>

                {/* Conditional rendering based on login status using ternary operator */}
                {isLoggedIn ? (            
                    <li><LogoutButton setIsLoggedIn={setIsLoggedIn} /></li>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>
                )}
            </ul>
        </nav>

    );
};