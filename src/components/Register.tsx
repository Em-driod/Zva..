import React, { useState } from 'react';
import axios from 'axios';

const Register: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      console.log('Logged in:', response.data);
      localStorage.setItem('authToken', response.data.token);
    } catch (err) {
      console.error('Login failed:', err);
      setErrorMessage('Failed to login');
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    if (!privacyAccepted) {
      setErrorMessage("You must accept the privacy policy");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
      });
      console.log('Signed up:', response.data);
    } catch (err) {
      console.error('Signup failed:', err);
      const error = err as any;
      setErrorMessage(error.response?.data?.message || 'Failed to sign up');
    } finally {
      setLoading(false);
    }
  };

  const formContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100vw' ,
    fontFamily: 'Arial, sans-serif',
    backgroundImage: 'url("/f.jpg")',
  };

  const formStyle: React.CSSProperties = {
    width: '90%',
    maxWidth: '400px',
    padding: '30px',
    backgroundColor: 'black',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    color: '#333333',
  };

  const inputStyle: React.CSSProperties = {
    width: '90%',
    padding: '12px',
    justifyContent: 'center',
    marginBottom: '15px',
    borderRadius: '20px',
    border: '1px solid #ccc',
    fontSize: '14px',
  };

  const buttonStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    backgroundColor: 'red',
    border: 'none',
    borderRadius: '15px',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  };

  const toggleTextStyle: React.CSSProperties = {
    textAlign: 'center',
    marginTop: '15px',
    fontSize: '14px',
  };

  const linkStyle: React.CSSProperties = {
    color: 'red',
    cursor: 'pointer',
    textDecoration: 'underline',
  };

  const errorTextStyle: React.CSSProperties = {
    color: 'red',
    textAlign: 'center',
    fontSize: '14px',
    marginTop: '10px',
  };

  return (
    <div style={formContainerStyle}>
      {isLogin ? (
        <form onSubmit={handleLogin} style={formStyle}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Log In</h2>
          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" style={buttonStyle}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
          {errorMessage && <p style={errorTextStyle}>{errorMessage}</p>}
          <div style={toggleTextStyle}>
            <p>
              Don't have an account?{' '}
              <span style={linkStyle} onClick={() => setIsLogin(false)}>
                Sign up
              </span>
            </p>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSignup} style={formStyle}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
          <input
            type="text"
            placeholder="Name"
            style={inputStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            style={inputStyle}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <div style={{ marginBottom: '15px' }}>
            <label>
              <input
                type="checkbox"
                checked={privacyAccepted}
                onChange={() => setPrivacyAccepted(!privacyAccepted)}
                style={{ marginRight: '10px' }}
              />
              I agree to the <span style={linkStyle}>Privacy Policy</span>
            </label>
          </div>
          <button type="submit" style={buttonStyle}>
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
          {errorMessage && <p style={errorTextStyle}>{errorMessage}</p>}
          <div style={toggleTextStyle}>
            <p>
              Already have an account?{' '}
              <span style={linkStyle} onClick={() => setIsLogin(true)}>
                Sign in
              </span>
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default Register;
