import React from "react";
import InputField from "../components/InputField/InputField";
import "./styles/LoginPage.css";

function LoginPage() {
  return (
    <div className="login-container">
      <div className="form-container">
        <h1>WAOW Log In</h1>
        <form>
          {/* Gunakan InputField untuk email */}
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            required
          />
          {/* Gunakan InputField untuk password */}
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
          />
          <div>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <button type="submit">Log In</button>
        </form>
        <p>
          Don’t have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;