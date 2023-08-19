import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginForm.css';

function LoginForm({ onLogin }) {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Add this line

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      onLogin('admin');
      navigate('/admin'); // Redirect to /admin
    } else if (username === 'writer' && password === 'writer') {
      onLogin('writer');
      navigate('/content-writer'); // Redirect to /content-writer
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
