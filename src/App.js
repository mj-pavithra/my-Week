
 import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SingUpPage';
import React, { useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {



  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
