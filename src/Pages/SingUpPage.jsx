import React from "react";
import "../Styles/SingUpPage.css";
import { GoogleLogin } from "@react-oauth/google";

function SingUpPage() {
    
    return (
        <div className="sign-up-page">
            <div className="sign-up-form">
                <h1 className="Sign-In-Title" >Sign Up</h1>
                <form className="sign-up-form ">
                    <input className="signup-input"  type="email" placeholder="email" required/>
                    <input className="signup-input"  type="password" placeholder="Password" required/>
                    <input className="signup-input"  type="password" placeholder="Confirm Password" required/>
                    <button className="sign-up-form-button"  type="submit">Sign Up</button>
                </form>
                <div className="google-signup">
                <GoogleLogin
                    onSuccess={(CredentialResponse) => console.log(CredentialResponse
                    )}
                    onFailure={(CredentialResponse) => console.log(CredentialResponse
                    )}
                />
                </div>
            </div>
        </div>
    );
}

export default SingUpPage;