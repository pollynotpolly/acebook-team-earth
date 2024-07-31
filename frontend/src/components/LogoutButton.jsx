import { useNavigate } from 'react-router-dom';

export const LogoutButton = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");   // Remove token from localStorage
        setIsLoggedIn(false);               // Update login status in parent component
        navigate("/login");                 // Redirect user to login page
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};