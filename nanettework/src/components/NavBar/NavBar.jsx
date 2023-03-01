import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'

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
    navBarTransparent: {
        backgroundColor: 'rgb(231 231 231)'
    },
    navBarSolid: {
        backgroundColor: 'rgba(67, 129, 188)'
    }
}));

export default function NavBar() {
    const classes  = useStyles();

    const [navBackground, setNavBackground] = useState('navBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground;
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 310
            if (show) {
                setNavBackground('navBarSolid')
            } else {
                setNavBackground('navBarTransparent')
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
                    </Typography>
                    <Button color='black'>Portfolio</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
};
 

