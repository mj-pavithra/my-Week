import React from "react";
import LeftNav from "../Components/LeftNav";
import MiddleNav from "./MiddleNav";
import RightNav from "../Components/RightNav";

import "../Styles/NavBar.css";
function NavBar({segmentsList}) {
    return (
            <div className="navbar">
                <LeftNav className="nav-part"/>
                <MiddleNav className="nav-part" segments={segmentsList}/>
                <RightNav className="nav-part"/>
            </div>
    );
    }

    export default NavBar;