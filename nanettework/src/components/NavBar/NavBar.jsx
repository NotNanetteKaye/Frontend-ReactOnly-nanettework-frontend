import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core';
import Typography from '@material-ui/core';
import Button from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import styled from 'styled-components';
import './NavBar.css';

const NavBarLayout = styled.div`
    background: rgb(231 231 231);
    position: fixed;
    width: 100%;
    height: 20mm;
    display: grid;
    grid-template-columns: 20% 60% 20%;
`

const NavBar = () => {

    const [navBackground, setNavBackground] = useState('navBarTransparent')
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