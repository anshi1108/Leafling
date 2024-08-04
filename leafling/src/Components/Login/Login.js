import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.css';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', { username, password });
            if (response.status === 200) {
                navigate('/home');
            }
        } catch (error) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className='container'>
            <h1>Get Started!</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type='text'
                        id='username'
                        placeholder='Enter your name'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id='password'
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input type="submit" value="Log in"/>
                </div>
                {error && <p className="error">{error}</p>}
            </form>
            <div className="footer">
                <strong><p>Don't have an account? <a href="/signup">Sign up</a></p></strong>
            </div>
        </div>
    );
}

export default Login;