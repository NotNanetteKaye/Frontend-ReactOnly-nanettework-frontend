import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarLayout = styled.div`
    background: rgb(231 231 231);
    position: fixed;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`
const NavBarCategories = styled.ul`
    list-style-type: none;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-decoration: none;
`


const NavBar = () => {
    return ( 
    <NavBarLayout>
        <div className='logo'>
            <a href='www.youtube.com'>ND</a>
        </div>
        <NavBarCategories>
            <li>
                <Link to='/about'>ABOUT</Link>
            </li>
            <li>
                <Link to='/portfolio'>PORTFOLIO</Link>
            </li>
            <li>
                <Link to='/link'>LINK</Link>
            </li>
        </NavBarCategories>
    </NavBarLayout> 
    );
}
 
export default NavBar;