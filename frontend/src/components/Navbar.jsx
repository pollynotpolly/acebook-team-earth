
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const navigate = useNavigate();   // useNavigate hook - used to accesses the React Router history object 
    const [isLoggedIn, setIsLoggedIn] = useState(false);   // // useState to keep track of user's login status

    useEffect(() => {
    const token = localStorage.getItem("token");    // Check if there's a token in localStorage
    setIsLoggedIn(!!token);   // // Set isLoggedIn to true if token exists, false otherwise
    }, []);

    const handleLogout = () => {   // Function to handle user logout
    localStorage.removeItem("token");   // Update state to reflect logged out status
    setIsLoggedIn(false);
    navigate("/login");       // Redirect user to login page
    };

    return (
    <nav className="top-navbar">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Feed</Link></li>
        <li><Link to="/my-profile">Profile</Link></li>

{/* Conditional rendering belwo based on login status using ternary operator - same as if else statements */}

        {isLoggedIn ? (            
            <li><button onClick={handleLogout}>Logout</button></li>
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