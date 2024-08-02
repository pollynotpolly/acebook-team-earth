import { Link } from "react-router-dom";
import { LogoutButton } from "./LogoutButton";

export const Navbar = ({ setIsLoggedIn }) => {
    return (
        <nav className="navbar">
            <h1>earthbook!</h1>
            <ul>
                <li><Link to="/posts">&#127758; Feed</Link></li>
                <li><Link to="/my-profile">&#127759; Profile</Link></li>
                <li><LogoutButton setIsLoggedIn={setIsLoggedIn} /></li>
            </ul>
        </nav>
    );
};