import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './NavBar.css';

const NavBarLayout = styled.div`
    background: rgb(231 231 231);
    position: fixed;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-end;
`
const NavBarCategories = styled.ul`
    list-style-type: none;
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-decoration: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
`

const NavBarLogo = styled.a`
    text-decoration: none;
    font-size: 40mm;
    position: fixed;
`


const NavBar = () => {
    return ( 
        <div>
                <NavBarLogo href='www.youtube.com'>ND
                </NavBarLogo>
            <NavBarLayout>
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
        </div>
    );
}
 
export default NavBar;