import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser } from '../services/api';

function Login({ onLoginSuccess, onNavigate }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [serverError, setServerError] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data.username, data.password);
      onLoginSuccess(response.data);
    } catch (err) {
      setServerError(err.response?.data?.error || 'Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="discord-logo-mock">🔮</div>
        <h2>Welcome back!</h2>
        <p className="login-subtitle">We're so excited to see you again!</p>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <label>USERNAME</label>
          <input 
            type="text" 
            {...register('username', { required: 'Username is required' })} 
          />
          {errors.username && <p className="error-text">{errors.username.message}</p>}
          
          <label>PASSWORD</label>
          <input 
            type="password" 
            {...register('password', { required: 'Password is required',minLength: { value: 6, message: 'Password must be at least 6 characters' },
              maxLength:{value: 13, message: 'Password must be at most 13 characters' } })} 
          />
          {errors.password && <p className="error-text">{errors.password.message}</p>}
          
          {serverError && <p className="error-text">{serverError}</p>}
          
          <button type="submit" className="login-btn">Log In</button>
          
          <p className="redirect-text">
            Need an account? <span onClick={() => onNavigate('register')}>Register</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;