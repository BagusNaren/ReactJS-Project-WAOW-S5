import React from "react";
import InputField from "../components/InputField/InputField";
import "./styles/RegisterPage.css";

function RegisterPage() {
  return (
    <div className="register-container">
      <div className="form-container">
        <h1>WAOW Register</h1>
        <form>
          <div className="name-fields">
            <InputField
              label="First Name"
              type="text"
              placeholder="Enter your first name"
              required
            />
            <InputField
              label="Last Name"
              type="text"
              placeholder="Enter your last name"
              required
            />
          </div>
          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <InputField
            label="Phone Number"
            type="text"
            placeholder="Enter your phone number"
            required
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
          />
          <button type="submit">Register</button>
        </form>
        <p>
          Have an account? <a href="/">Log In</a>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;