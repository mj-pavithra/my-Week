import React, { useState, useContext } from "react";
import "../Styles/SignUpPage.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { UserContext } from "../App";

function SignUpPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const validateEmail = () => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError("Invalid email format");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = () => {
        // Password validation logic
        if (password.length < 8) {
            setPasswordError("Password must be at least 8 characters long");
        } else {
            setPasswordError("");
        }
    };

    const validateConfirmPassword = () => {
        // Confirm password validation logic
        if (confirmPassword !== password) {
            setConfirmPasswordError("Passwords do not match");
        } else {
            setConfirmPasswordError("");
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(""); // Clear previous error message
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError(""); // Clear previous error message
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordError(""); // Clear previous error message
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
    };

    const handleSuccess = (response) => {
        console.log(response); // Log the entire response to inspect its structure
        if (response.credential) {
            console.log("wade goda kollo.........")
            console.log("Credential:", response.credential);
            const decodedToken = jwtDecode(response.credential);
            console.log("Decoded Token:", decodedToken);
            // Extract user details from the decoded token and perform further actions as needed
        }
    };



const [userDetails, setUserDetails] = useContext(UserContext);

    return (
        <div className="sign-up-page">
            <div className="sign-up-form clasic-border">
                <h1 className="Sign-In-Title">Sign Up</h1>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <div className="notice">
                        <label className={email ? "input-label active" : "input-label"}>Email</label>
                        <input
                            className="signup-input"
                            type="email"
                            placeholder="Email"
                            id="email-input"
                            value={email}
                            onChange={handleEmailChange}
                            onBlur={validateEmail}
                            required
                        />
                        {emailError && <span className="error-message">{emailError}</span>}
                    </div>
                    <div className="notice">
                        <label className={password ? "input-label active" : "input-label"}>Password</label>
                        <input
                            className="signup-input"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            onBlur={validatePassword}
                            required
                        />
                        {passwordError && <span className="error-message">{passwordError}</span>}
                    </div>
                    <div className="notice">
                        <label className={confirmPassword ? "input-label active" : "input-label"}>Confirm Password</label>
                        <input
                            className="signup-input"
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            onBlur={validateConfirmPassword}
                            required
                        />
                        {confirmPasswordError && <span className={confirmPasswordError ? "error-message" : "error-message active"}>{confirmPasswordError}</span>}
                    </div>
                    <button className="sign-up-form-button" type="submit">Sign Up</button>
                </form>
                <div className="google-signup">
                    <GoogleLogin
                        onSuccess={handleSuccess}
                        onFailure={(CredentialResponse) => console.log(" kela una bossa " + CredentialResponse)}
                    />
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;
