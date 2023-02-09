import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return ( 
    <div className='NavBar'>
        <div className='logo'>
            <a href='www.youtube.com'>ND</a>
        </div>
        <ul>
            <li>
                <Link to='/about'>ABOUT</Link>
            </li>
            <li>
                <Link to='/portfolio'>PORTFOLIO</Link>
            </li>
            <li>
                <Link to='/link'>LINK</Link>
            </li>
        </ul>
    </div> );
}
 
export default NavBar;