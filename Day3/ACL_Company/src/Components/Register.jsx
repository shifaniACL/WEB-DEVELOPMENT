import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Register = () => {
  return (
    <div className='container'>
      <div>
        <h2>SIGN UP</h2>
        <div>
          {/* Add an image */}
          <img
            src="Developer_image.png" // Replace with your image URL
            alt="Register Illustration"
            height="100px"
          />
          <form>
            <div className="input-group">
              <label htmlFor="username">USERNAME :</label>
              <input
                id="username"
                type="text"
                placeholder="User Name"
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">EMAIL :</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">PASSWORD :</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm-password">CONFIRM PASSWORD :</label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
              />
            </div><br />
            <button type="submit">
              SIGN UP
            </button><br />
            <label htmlFor="">OR</label><br />
            <button type="submit">
              SIGN IN WITH GOOGLE
            </button>
          </form>
          <div>
            <label htmlFor="">ALREADY HAVE AN ACCOUNT?</label>
            <Link to="/"> LOG IN</Link> {/* Link to Login page */}
          </div><br />
        </div>
      </div>
    </div>
  );
};

export default Register;
