import React from "react";
import NavBar from "../Components/NavBar";
import HPmiddle from "../Containers/HPmiddle";
import Footer from "../Components/Footer";
import "../Styles/HomePage.css";
import { type } from "@testing-library/user-event/dist/type";

const navSegments = ["Home", "About", "Contact", "Services", "Portfolio"];
function HomePage() {
    return (
        <div className="HomePage">
            <div className="a4">
                <NavBar segmentsList ={navSegments} />
                <HPmiddle/>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;