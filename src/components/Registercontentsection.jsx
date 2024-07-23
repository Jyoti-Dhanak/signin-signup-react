import React from "react";
import Input from "./Input";
import { Link } from "react-router-dom";

function Registercontentsection() {
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
            type: "username",
            id: "username",
            placeholder: "Enter your username",
            for: "username",
            content: "Username"
        },
        {
            sno: "3",
            type: "password",
            id: "passkey",
            placeholder: "Enter your password",
            for: "passkey",
            content: "Password"
        },
        {
            sno: "4",
            type: "password",
            id: "pass",
            placeholder: "Confirm your password",
            for: "pass",
            content: "Confirm Password"
        }
    ];
    return (

        <div className="signin-form">
            <div className="logo">Your Logo</div>
            <div className="login-credentials">
                <h2>Sign Up</h2>
                <p>If you already have an account registered <br />You can <span className="txt"><Link to="/">Login Here!</Link></span></p>
                <form>
                    <Input attribute={attributes} />
                    <button id="register" type="submit">Register</button>
                </form>
            </div>
        </div>


    );
}

export default Registercontentsection;
