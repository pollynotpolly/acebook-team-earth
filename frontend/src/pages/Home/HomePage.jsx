import { Link } from "react-router-dom";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="home">
      <div className="left-section">
        <h1>earthbook!</h1>
        <h2>&#127758; &#127759; &#127757;</h2>
        <p>Connect with friends around the ....</p>
          <p>errmm ... globe!?</p>
      </div>
      <div className="right-section">
        <div className="login-form">
          <form>
            <input type="email" placeholder="Email or phone number" required />
            <input type="password" placeholder="Password" required />
            <div className="login-submit">
              <button type="submit" className="login">Login</button>
            </div>
            <hr />
            <div className="button">
              <Link to="/signup">Create new account</Link>
            </div>
          </form>
          <footer>
      <p className="team-roll-call">team earth &#127758; Joey &#127759; Karla &#127757; Robert &#127758; Glory &#127759; George &#127757; Polly &#127758; John
      </p>
    </footer>
        </div>
      </div>
    </div>
  );
};
















