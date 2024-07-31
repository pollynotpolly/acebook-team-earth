
import { Link } from "react-router-dom";

// created a Navbar component that contains links to different routes.

export const Navbar = () => {
    return (
    <nav className="top-navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/posts">Feed</Link></li>
        </ul>
    </nav>
    );
};