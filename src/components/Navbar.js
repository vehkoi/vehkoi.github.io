import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";

import { theme_context } from "../App"


function Navbar() {
    const { theme, toggle_theme } = useContext(theme_context);
    
    const Moon = <FontAwesomeIcon icon={ faMoon } size="2xl" color='black' /> 
    const Sun = <FontAwesomeIcon icon={ faSun } size="2xl" color='white' />
  
    return (
        <div className='nav'>
            <div className='nav-right'>
            <ul> 
              <li onClick={toggle_theme}>
                {theme === "light" ? (
                    Moon
                ) : (
                    Sun
                )}
                </li>
            </ul>
            </div>
        </div>
    )
  }

export default Navbar