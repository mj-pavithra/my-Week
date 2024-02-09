// MiddleNav.js
import React,{useState} from "react";
import "../Styles/MiddleNav.css";



function MiddleNav( {segments} ) {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    return (
        <div>
            <div className="middle-nav-max">
                {segments.map((segment, index) => (
                    <h1 key={index} className="nav-segments">{segment}</h1>
                ))}
            </div>
            <div className="middle-nav-min">
            <button className="dropdown-button" onClick={toggleDropdown}>Menu</button>
                {segments.map((segment, index) => (
                    <h1 key={index} className="nav-segments-min">{segment[0]}</h1>
                ))}
            </div>
        </div>
    );
}

export default MiddleNav;
