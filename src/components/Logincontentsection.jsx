import React from "react";
import Input from "./Input";
import { Link } from "react-router-dom";

function Contentsection() {
    const attributes = [
        {
            sno: "1",
            type: "email",
            id: "mail",
            placeholder: "Enter your email address",
            for: "mail",
            content: "Email"
        },
        {
            sno: "2",
            type: "password",
            id: "passkey",
            placeholder: "Enter your password",
            for: "passkey",
            content: "Password"
        }
    ];
    return (

        <div className="signin-form">
            <div className="logo">Your Logo</div>
            <div className="login-credentials">
                <h2>Sign in</h2>
                <p>If you don’t have an account register <br />You can <span className="txt"><Link to="/register">Register Here!</Link></span></p>
                <form>
                    <Input attribute={attributes} />
                    <div class="options">
                        <label><input type="checkbox" name="remember" /> Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div className="social-login">
                    <p>or continue with</p>
                    <div class="social-icons">
                        <i className="fab fa-google" ></i>
                        <i className="fab fa-apple"></i>
                        <i className="fab fa-facebook"></i>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Contentsection;
