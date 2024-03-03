import React , {useEffect,useState} from "react";
import LeftNav from "../Components/LeftNav";
import MiddleNav from "./MiddleNav";
import RightNav from "../Components/RightNav";

import "../Styles/NavBar.css";
function NavBar({segmentsList}) {
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
  
    return (
            <div className="navbar">
                <LeftNav className="nav-part"/>
                <MiddleNav className="nav-part" segments={segmentsList}/>
                {windowWidth > 900 ? <RightNav className="nav-part"/> : null}
            </div>
    );
    }

    export default NavBar;