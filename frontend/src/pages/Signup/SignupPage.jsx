import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";
import { signup } from "../../services/authentication";
import { PasswordValidator } from "../../components/Utilities/PasswordValidator"

export const SignupPage = () => {
  const [email, setEmail,] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isPasswordValid) {
      alert('Please fix the errors in the form');
      return;
    }
    try {
      await signup(name, surname, email, password);
      console.log("redirecting...:");
      navigate("/");
    } catch (err) {
      console.error(err);
      navigate("/signup");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (newPassword, isValid) => {
    setPassword(newPassword);
    setIsPasswordValid(isValid);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  }

  return (
    <div className="signup-container">
      <h2 className="signup-title">Signup</h2>
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
          <PasswordValidator onPasswordChange={handlePasswordChange} />
        </div>
  
        <input 
          className="submit-button" 
          role="submit-button" 
          id="submit" 
          type="submit" 
          value="Submit"  
          disabled={!isPasswordValid}   /* disables button until valid password  */
        />
      </form>
    </div>
  );
};