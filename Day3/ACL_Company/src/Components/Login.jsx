import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Login.css';

const Login = () => {
  return (
    <div className='container'>
      <div>
        <h2>LOGIN</h2>
        <div>
          {/* Add an image */}
          <img
            src="Developer_image.png" // Replace with your image URL
            alt="Register Illustration"
            height="100px"
          />
          <br></br>
          <form>
            <div>
              <label htmlFor="">USERNAME :</label><br />
              <input
                type="username"
                placeholder="Username"
              /><br></br>
            </div>
            <br></br>
            <div>
              <label htmlFor="">PASSWORD :</label><br></br>
              <input
                type="password"
                placeholder="Password"
              /><br></br>
              <br></br>
                
                <a href="" style={{display:"inline"}}>Forget Password</a>
              
            </div><br></br>
            <button type="submit">LOGIN</button><br></br>
            <div>
              <label htmlFor="">DON'T HAVE AN ACCOUNT?</label>
              <Link to="/register"> SIGN UP</Link> {/* Link to Register page */}
            </div><br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
