import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './NavBar.css';

const NavBarLayout = styled.div`
    background: rgb(231 231 231);
    position: fixed;
    width: 100%;
    display: grid;

`

const NavBar = () => {
    return ( 
        <NavBarLayout>
            <a href='www.youtube.com' className='navBarLogo'>ND
            </a>
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
        </NavBarLayout> 
    );
}
 
export default NavBar;