
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
    };

    return (
    <nav className="top-navbar">
        <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Feed</Link></li>
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