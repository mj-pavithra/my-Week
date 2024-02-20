import React from "react";
import "../Styles/SignInPage.css";
import { GoogleLogin } from "@react-oauth/google";

function SignInPage() {
    return (
        <div className="sign-in-page">
            <div className="sign-in-form">
                <h1 className="Sign-In-Title">Log in</h1>
                <form>
                    <input className="signin-input" type="text" placeholder="Username" required/>
                    <input className="signin-input" type="password" placeholder="Password" required/>
                    <button type="submit">Sign In</button>
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

export default SignInPage;