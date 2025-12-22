import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const moveTo = useNavigate();

  const Login = async () => {
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    setError('');

    try {
      const res = await fetch('https://mocki.io/v1/c799884c-44a8-4e1c-b6e7-8b358080a214');
      const users = await res.json();

      if (users.find(us => us.username === username && us.password === password)) {
        localStorage.setItem('token', '123');
        moveTo('/home');
      } else {
        setError('Incorrect username or password');
      }
    } catch {
      setError('Error connecting to API');
    }
  };

  return (
    <div>

      <div className="error-message">{error}</div>

      <TextField
        label="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        fullWidth
        margin="normal"
      />

      <Button variant="contained" onClick={Login} className="login-button" fullWidth>
        Login
      </Button>
    </div>
  );
}

export default LoginForm;
