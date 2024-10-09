import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        { email, password }
      );
      if (response.status === 200) {
        navigate("/home");
      }
    } catch (error) {
      setError("Invalid credentials");
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
                    value="Log in"
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
