import React from "react";
import "../Styles/SingUpPage.css";
import { GoogleLogin } from "@react-oauth/google";

function SingUpPage() {
    
    return (
        <div className="sign-up-page">
            <div className="sign-up-form">
                <h1 className="Sign-In-Title">Create new account</h1>
                <form>
                    <input className="signup-input" type="text" placeholder="Username" required/>
                    <input className="signup-input" type="password" placeholder="Password" required/>
                    <input className="signup-input" type="password" placeholder="Confirm Password" required/>
                    <button type="submit">Sign Up</button>
                </form>
                <GoogleLogin className="google-sign-up"
                    onSuccess={(CredentialResponse) => console.log(CredentialResponse
                    )}
                    onFailure={(CredentialResponse) => console.log(CredentialResponse
                    )}
                />
            </div>
        </div>
    );
}

export default SingUpPage;