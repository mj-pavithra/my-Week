import React, { useState } from "react";
import "../Styles/MiddleNav.css";

function MiddleNav({ segments }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="middle-nav">
            <div className="middle-nav-max">
                {segments.map((segment, index) => (
                    <h1 key={index} className="nav-segments">{segment}</h1>
                ))}
            </div>
            <div className={`middle-nav-min ${showDropdown ? "show-dropdown" : ""}`}>
                <button className="dropdown-button" onClick={toggleDropdown}>Menu</button>
                <div className={`dropdown-content ${showDropdown ? "show" : ""}`}>
                    {segments.map((segment, index) => (
                        <h1 key={index} className="nav-segments-min">{segment}</h1>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MiddleNav;
