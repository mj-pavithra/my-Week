import React from "react";
import NavBar from "../Components/NavBar";
// import Footer from "../Components/Footer";
// import HPmiddle from "../Components/HPmiddle";
import "../Styles/HomePage.css";
import { type } from "@testing-library/user-event/dist/type";

const navSegments = ["Home", "About", "Contact", "Services", "Portfolio"];
function HomePage() {
    return (
        <div>
            <NavBar segmentsList ={navSegments} />
        </div>
    );
}

export default HomePage;