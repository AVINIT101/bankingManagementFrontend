import React, { useState } from 'react';
import { useNavigate   } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear validation errors when the user starts typing
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    
    if (!formData.username.trim()) {
      errors.username = 'Username is required';

    }

    
    if (!formData.password.trim()) {
      errors.password = 'password is required';

    }
    if (Object.keys(errors).length > 0) {
      // If there are validation errors, set them in the state
      setErrors(errors);
      return;
    }
    console.log('Login Data:', formData);
    const successfulLogin = true;

    if (successfulLogin) {
      // Redirect to the dashboard page
      navigate('/dashboard');
    } else {
      // Handle unsuccessful login (display error message, etc.)
      console.log('Login failed. Please check your credentials.');
    }
  };

  return (
    <div style={{ backgroundColor: '#801600', height: '100vh' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}

        </label>
        <br />
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}

        </label>
        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};


export default Login;
