import { useNavigate } from 'react-router-dom';
// updated button component
export const LogoutButton = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");   // Remove token from localStorage
        setIsLoggedIn(false);               // Update login status in parent component
        navigate("/");                 // Redirect user to login page
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};