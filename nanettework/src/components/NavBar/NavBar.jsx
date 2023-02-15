import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './NavBar.css';

const NavBarLayout = styled.div`
    background: rgb(231 231 231);
    position: fixed;
    width: 100%;
    height: 20mm;
    display: grid;
    grid-template-columns: 20% 70% 10%;
`

const NavBar = () => {
    return ( 
        <NavBarLayout>
            <ul>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/portfolio'>Portfolio</Link>
                </li>
            </ul>
            <a href='www.youtube.com' className='navBarLogo'>NANETTE KAYE DOLERA</a>
            <h6>social media links over yur</h6>
        </NavBarLayout> 
    );
}
 
export default NavBar;