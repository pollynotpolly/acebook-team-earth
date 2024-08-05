import { useState } from "react";
import { useNavigate, useOutletContext, Link } from "react-router-dom";
import { login } from "../services/authentication";

export const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { updateLoginStatus } = useOutletContext();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await login(email, password);
      localStorage.setItem("token", token);
      updateLoginStatus(); // Call this function after successful login
      navigate("/posts");
    } catch (err) {
      console.error(err);
      // You might want to set an error state here and display it to the user
      // instead of navigating to the login page again
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="login">
            <input role="submit-button" id="submit" type="submit" value="Login" />
          </div>
          <div className="signup">
            <Link to="/signup">Create new account</Link>
          </div>
        </form>
      </div>
    </>
  );
};