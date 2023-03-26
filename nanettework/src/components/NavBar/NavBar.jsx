import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

// TO DO:
// need to go back and change link to <a> title tag when deploying

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '70px',
        backgroundColor: 'rgba(231, 231, 231, 1)',
        fontSize: '1rem',
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'black',
        fontFamily: 'Georgia, Times, "Times New Roman", serif',
    },
    title: {
        flexGrow: 1,
        color: 'black',
        fontFamily: 'Georgia, Times, "Times New Roman", serif',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        fontWeight: 'bold',
        textShadow: '2px 2px 53px #e7e7e7',
        backgroundColor: 'transparent',
        textDecoration: 'none',
    },
    icons: {
        flexGrow: .02,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    appBarTransparent: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        height: '70px',
    },
    appBarSolid: {
        backgroundColor: 'rgba(231, 231, 231, 1)',
        color: 'black',
        height: '70px',
    }
}));

export default function NavBar() {
    const navigate = useNavigate();
    const classes  = useStyles();
    const [navBackground, setNavBackground] = useState('appBarTransparent')

    const navRef = React.useRef()
    navRef.current = navBackground;

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 30
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return ( 
        <div className={classes.root}>
            <AppBar position='fixed' className={classes[navRef.current]} elevation={0} >
                <Toolbar>
                    <Button onClick={() => navigate('/portfolio')}>Portfolio</Button>
                    <Button onClick={() => navigate('/highlights')}>Highlights</Button>
                    <a className={classes.title} href='http://localhost:3000/nanettekayedolera'>
                        NANETTE KAYE DOLERA
                    </a>
                    <ul className={classes.icons}>
                        <li>
                            <a href='https://www.linkedin.com/in/nanettekayedolera/'
                                className=''
                                target="_blank"
                                rel="noreferrer">
                                <FaLinkedin size={26} color='black'/>
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/NotNanetteKaye'
                                target="_blank"
                                rel="noreferrer"
                                className=''>
                                <FaGithub size={26} color='black'/>
                            </a>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        </div>
    )
};
 

// video tutorial followed: https://www.youtube.com/watch?v=_N41IcElkZo