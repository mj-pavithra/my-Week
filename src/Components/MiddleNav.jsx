
import React, { useState , useEffect} from "react";
import "../Styles/MiddleNav.css";

function MiddleNav({ segments }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

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
