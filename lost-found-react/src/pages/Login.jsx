import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    
    setSuccess(true);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-page">

      <h2 className="login-title">Login</h2>

      <form className="login-form" onSubmit={handleSubmit}>

        <label>Email / Username:</label>
        <input
          type="text"
          placeholder="Enter your email or name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <div className="password-wrapper">
          <input
            type={showPass ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <span
            className="toggle-pass"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? "🙈" : "👁️"}
          </span>
        </div>

        
        {error && <p className="error-text">{error}</p>}

        <button className="btn login-btn" type="submit">
          Login
        </button>

        <p className="switch-link">
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>

      
      {success && (
        <div className="popup">
          <div className="popup-box">
            <p>Login Successful ✔</p>
            <button className="close-btn" onClick={() => setSuccess(false)}>
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
