import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Set loading to true
    setError(""); // Reset any previous errors

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        { email, password }
      );

      if (response.status === 200) {
        // const { username } = response.data; // Assuming the username is sent in response.data
        localStorage.setItem("username",  email); // Store the username in local storage
        navigate("/home");
      }
    } catch (error) {
      setError("Invalid credentials or server error."); // More generic error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="pageholdpic-1">
      <div className="containeroflogin">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="container-1">
              <h1>Get Started!</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group-1">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group-1">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group-1">
                  <input
                    type="submit"
                    className="btn btn-green w-100"
                    value={loading ? "Logging in..." : "Log in"} // Conditional button text
                    disabled={loading} // Disable button while loading
                  />
                </div>

                {error && <p className="error">{error}</p>}
              </form>
              <div className="footer-1">
                <strong>
                  <p>
                    Don't have an account? <a href="/signup">Sign up</a>
                  </p>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
