import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../services/api';

function Register({ onNavigate }) {
  // تفكيك دوال ومثبتات React Hook Form
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [serverError, setServerError] = useState('');
  const [success, setSuccess] = useState('');

  // دالة الإرسال تستقبل البيانات الجاهزة من المكتبة مباشرة
  const onSubmit = async (data) => {
    try {
      await registerUser(data.username, data.password);
      setSuccess('Account created successfully! Redirecting to login...');
      setServerError('');
      setTimeout(() => onNavigate('login'), 2000);
    } catch (err) {
      setServerError(err.response?.data?.error || 'Registration failed.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="discord-logo-mock">🔮</div>
        <h2>Create an account</h2>
        
        {/* نمرر دالة handleSubmit الخاصة بالمكتبة وبداخلها دالتنا */}
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
            {...register('password', { 
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
              maxLength:{value: 13, message: 'Password must be at most 13 characters' }
            })} 
          />
          {errors.password && <p className="error-text">{errors.password.message}</p>}
          
          {serverError && <p className="error-text">{serverError}</p>}
          {success && <p className="success-text">{success}</p>}
          
          <button type="submit" className="login-btn">Register</button>
          
          <p className="redirect-text">
            Already have an account? <span onClick={() => onNavigate('login')}>Log In</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;