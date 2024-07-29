import "./LoginForm.css";
import React from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";

export default function LoginForm() {
  const validate = yup.object({
    email: yup
      .string()
      .min(12, "Your email should be more that 12 characters or 12 characters")
      .required("Required"),
    password: yup
      .string()
      .min(8, "Password must be of 8 characters or more")
      .required("Required"),
  });
  return (
    <div className="signin-form">
      <div className="logo">Your Logo</div>
      <div className="login-credentials">
        <h2>Sign in</h2>
        <p>
          If you don’t have an account register <br />
          You can{" "}
          <span className="txt">
            <Link to="/register">Register Here!</Link>
          </span>
        </p>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              id="email"
              for="email"
              label="Email"
            />
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              id="passkey"
              for="passkey"
              label="Password"
            />
            <div class="options">
              <label>
                <input type="checkbox" name="remember" /> Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Login</button>
          </Form>
        </Formik>

        <div className="social-login">
          <p>or continue with</p>
          <div class="social-icons">
            <i className="fab fa-google"></i>
            <i className="fab fa-apple"></i>
            <i className="fab fa-facebook"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
