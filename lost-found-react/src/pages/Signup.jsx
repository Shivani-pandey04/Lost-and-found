import { useState } from "react";
import "./Signup.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: ""
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { name, email, password, confirmPass } = formData;

    if (!name || !email || !password || !confirmPass) {
      setError("All fields are required.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPass) {
      setError("Passwords do not match.");
      return;
    }

    // Success popup
    setSuccess(true);

    // Clear form
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPass: ""
    });
  };

  return (
    <div className="signup-page">

      <h2 className="signup-title">Sign Up</h2>

      <form className="signup-form" onSubmit={handleSubmit}>
        
        <label>Full Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter your full name"
          onChange={handleChange}
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />

        <label>Password:</label>
        <div className="password-wrapper">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            value={formData.password}
            placeholder="Create password"
            onChange={handleChange}
          />
          <span
            className="toggle-pass"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? "🙈" : "👁️"}
          </span>
        </div>

        <label>Confirm Password:</label>
        <div className="password-wrapper">
          <input
            type={showConfirm ? "text" : "password"}
            name="confirmPass"
            value={formData.confirmPass}
            placeholder="Confirm password"
            onChange={handleChange}
          />
          <span
            className="toggle-pass"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? "🙈" : "👁️"}
          </span>
        </div>

        {/* Error message */}
        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="btn signup-btn">Create Account</button>

        <p className="switch-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>

      {/* Success Popup */}
      {success && (
        <div className="popup">
          <div className="popup-box">
            <p>Account Created Successfully ✔</p>
            <button className="close-btn" onClick={() => setSuccess(false)}>
              OK
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
