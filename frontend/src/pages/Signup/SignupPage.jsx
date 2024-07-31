import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          />

        <label htmlFor="surname">Surname:</label>
        <input
          id="surname"
          type="text"
          value={surname}
          onChange={handleSurnameChange}
          />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          placeholder="Password"
          id="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input role="submit-button" id="submit" type="submit" value="Submit"  />
        
        </form>
        
      </>
    );
  };
  