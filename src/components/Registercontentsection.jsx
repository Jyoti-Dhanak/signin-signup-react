import React from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as yup from "yup";

function Contentsection() {

    const validate = yup.object({
        username: yup.string()
            .min(6, "Username must be at least 6 characters")
            .required("Required"),
        email: yup.string()
            .email("Enter a valid email address")
            .required("Required"),
        password: yup.string()
            .min(8, "Password must be at least 8 characters")
            .required("Required")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@$%^&*_-~`])[A-Za-z\d!@$%^&*_-~`]{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords is not matching')
            .required("Required"),
    });

    return (
        <div className="signin-form">
            <div className="logo">Your Logo</div>
            <div className="login-credentials">
                <h2>Sign in</h2>
                <p>If you already have an account registered <br />You can <span className="txt"><Link to="/">Login Here!</Link></span></p>
                <Formik
                    initialValues={{
                        username: "",
                        email: "",
                        password: "",
                        confirmPassword: ""
                    }}
                    validationSchema={validate}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    <Form>
                        <Input name="username" type="text" placeholder="Enter your Username" id="username" for="username" label="Username" />
                        <Input name="email" type="email" placeholder="Enter your email" id="email" for="email" label="Email" />
                        <Input name="password" type="password" placeholder="Enter your password" id="passkey" for="passkey" label="Password" />
                        <Input name="confirmPassword" type="password" placeholder="Confirm your password" id="pass" for="pass" label="Confirm Password" />
                        <button type="submit">Register</button>
                    </Form>
                </Formik>
            </div>
        </div>


    );
}

export default Contentsection;
