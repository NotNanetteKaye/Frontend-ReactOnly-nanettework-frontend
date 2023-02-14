import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarLayout = styled.div`
    background: rgb(231 231 231);
    position: fixed;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`


const NavBar = () => {
    return ( 
    <NavBarLayout>
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
    </NavBarLayout> );
}
 
export default NavBar;