import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";
import { signup } from "../../services/authentication";

export const SignupPage = () => {
  const [email, setEmail,] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signup(name, surname, email, password);
      console.log("redirecting...:");
      navigate("/login");
    } catch (err) {
      console.error(err);
      navigate("/signup");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  }

  return (
    <div className="signup-container">
      <h2 className="signup-title">&#127758; Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            id="name"
            className="form-input"
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </div>
  
        <div className="form-group">
          <label htmlFor="surname" className="form-label">Surname:</label>
          <input
            id="surname"
            className="form-input"
            type="text"
            value={surname}
            onChange={handleSurnameChange}
          />
        </div>
  
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            id="email"
            className="form-input"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
  
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            id="password"
            className="form-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
  
        <input 
          className="submit-button" 
          role="submit-button" 
          id="submit" 
          type="submit" 
          value="Submit"  
        />
      </form>
      <footer>
      <p className="team-roll-call">team earth &#127758; Joey &#127759; Karla &#127757; Robert &#127758; Glory &#127759; George &#127757; Polly &#127758; John
      </p>
    </footer>
    </div>
  );
};