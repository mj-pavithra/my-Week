 import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SingUpPage';
import React, { useEffect, useContext } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const UserContext = React.createContext();

function App() {

  const [user, setUser] = useContext(UserContext);

  return (
    <GoogleOAuthProvider clientId="1009384779074-o2anjdf3r1fe35ltp38n00mqfvkasrlb.apps.googleusercontent.com">
    <UserContext.Provider >
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>

    </div>
    </UserContext.Provider>

    </GoogleOAuthProvider>
  );
}
export default App;
