import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import { Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black'
    },
    title: {
        flexGrow: 1,
        color: 'black'
    },
    appBarTransparent: {
        backgroundColor: 'rgba(255, 255, 255 / 0%)'
    },
    appBarSolid: {
        backgroundColor: 'rgba(67, 129, 168,0.5)'
    }
}));

export default function NavBar() {
    const classes  = useStyles();
    const [navBackground, setNavBackground] = useState('appBarTransparent')

    const navRef = React.useRef()
    navRef.current = navBackground;

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 600
            if (show) {
                setNavBackground('appBarTransparent')
            } else {
                setNavBackground('appBarSolid')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return ( 
        <div className={classes.root}>
            <AppBar position='fixed' className={classes[navRef.current]} >
                <Toolbar>
                    <IconButton className={classes.menuButton}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        About
                        Portfolio
                    </Typography>
                    <Button color='black'>Portfolio</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
};
 

// video tutorial followed: https://www.youtube.com/watch?v=_N41IcElkZo