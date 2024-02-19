import React from "react";
import "../Styles/SignInPage.css";

function SignInPage() {
    return (
        <div className="sign-in-page">
            <div className="sign-in-form">
                <h1>Sign In</h1>
                <form>
                    <input type="text" placeholder="Username" required/>
                    <input type="password" placeholder="Password" required/>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
}

export default SignInPage;