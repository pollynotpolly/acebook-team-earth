import { Link } from "react-router-dom";
import { LogoutButton } from "./Utilities/LogoutButton";

export const Navbar = ({ setIsLoggedIn }) => {
    return (

        <nav className="navbar">
            <h1>earthbook</h1>
            <ul>
                <li><Link to="/posts">Feed</Link></li>
                <li><Link to="/my-profile">Profile</Link></li>
                <li><Link to="/my-friends">Friends</Link></li>
                <li><LogoutButton setIsLoggedIn={setIsLoggedIn} /></li>
            </ul>
        </nav>
    );
};
