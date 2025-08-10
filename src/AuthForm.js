import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle } from 'react-icons/fa';
import './Auth.css'; // Add custom styles if needed

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleForm = () => setIsSignup(!isSignup);
  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="container my-5 d-flex justify-content-center align-items-center" style={{ minHeight: '90vh' }}>
      <div className="card p-4 shadow-lg border-0 auth-card" style={{ maxWidth: '450px', width: '100%' }}>
        <h3 className="fw-bold text-center mb-3">
          {isSignup ? 'Create an Account' : 'Welcome Back'}
        </h3>

        <form>
          {isSignup && (
            <>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="fullName" placeholder="Full Name" />
                <label htmlFor="fullName">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="tel" className="form-control" id="phone" placeholder="Phone Number" />
                <label htmlFor="phone">Phone Number</label>
              </div>
            </>
          )}

          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="email" placeholder="Email Address" />
            <label htmlFor="email">Email Address</label>
          </div>

          <div className="form-floating mb-3 position-relative">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control"
              id="password"
              placeholder="Password"
            />
            <label htmlFor="password">Password</label>
            <span
              className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
              style={{ cursor: 'pointer' }}
              onClick={togglePassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {isSignup && (
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
              <label htmlFor="confirmPassword">Confirm Password</label>
            </div>
          )}

          <button type="submit" className="btn w-100 py-2 mt-2" id="btn2">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>

          {!isSignup && (
            <div className="text-end mt-2">
              <small><a href="#" className="text-muted">Forgot Password?</a></small>
            </div>
          )}
        </form>

        {/* Divider */}
        <div className="d-flex align-items-center my-3">
          <div className="flex-grow-1 border-top"></div>
          <span className="mx-2 text-muted small">or continue with</span>
          <div className="flex-grow-1 border-top"></div>
        </div>

        <div className="d-flex gap-3 justify-content-center mb-3">
  <button
    className="btn rounded-circle d-flex align-items-center justify-content-center"
    style={{ backgroundColor: '#3b5998', color: 'white', width: '45px', height: '45px' }}
  >
    <FaFacebookF />
  </button>

  <button
    className="btn rounded-circle d-flex align-items-center justify-content-center"
    style={{ backgroundColor: '#db4437', color: 'white', width: '45px', height: '45px' }}
  >
    <FaGoogle />
  </button>
</div>


        <p className="text-center mt-2 small">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            className=" fw-bold"
            role="button"
            style={{ cursor: 'pointer', color:"#8dc73f" }}
            onClick={toggleForm}
          >
            {isSignup ? 'Login' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
