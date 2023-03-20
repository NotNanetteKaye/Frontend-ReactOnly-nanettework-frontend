 // Image Imports
import darlingDreams from '../../portfolio_images/capstoneImage.png';
import youtubeClone from '../../portfolio_images/youtubeclone.png';
import recruitmentVideo from '../../portfolio_images/horizontalVideo.png';
import revealVideo from '../../portfolio_images/verticalVideo.png';

// CSS Imports
import '../PortfolioPage/PortfolioPage.css';

// React Imports
import React from 'react';
import { FaReact, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiDjango, SiJavascript, SiMysql } from 'react-icons/si';
import { motion } from "framer-motion";
import Footer from '../../components/Footer/Footer';


const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: {type: 'spring', delay: .6}},
};

const Project = ({ title, description, link, photo }) => {
    return (
        <motion.div variants={projectVariant}
        initial= 'hidden'
        animate='visible'>
        < a
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            <div className='individualProjectContainer'>
                <img src={photo} alt={title} width='%' height='50%'/>
                <div className='individualProjectWords'>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </a>
        </motion.div>
    );
}; 

const PortfolioPage = () => {
    return(
        <div className='portfolioPageLayout'>
            <div className='portfolioSkills'>
                <motion.div variants={projectVariant}
                initial= 'hidden'
                animate='visible'>
                    <h1>SKILLS</h1>
                    <div className='codingIcons'>
                    <div className='codingIcon'>
                        <SiMysql size={100} />
                        <h3>MySQL</h3>
                    </div>
                    <div className='codingIcon'>
                        <FaReact size={100} />
                        <h3>React</h3>
                    </div>
                    <div className='codingIcon'>
                        <FaPython size={100} />
                        <h3>Python</h3>
                    </div>
                    <div className='codingIcon'>
                        <FaHtml5 size={100}/>
                        <h3>HTML5</h3>
                    </div>
                    <div className='codingIcon'>
                        <FaCss3Alt size={100} />
                        <h3>CSS</h3>
                    </div>
                    <div className='codingIcon'>
                        <SiDjango size={100} />
                        <h3>Django</h3>
                    </div>
                    <div className='codingIcon'>
                    <SiJavascript size={100} />
                    <h3>JavaScript</h3>
                    </div>
                    </div>
                </motion.div>
                
            </div>
            <div className='codingScene'>
                <motion.div variants={projectVariant}
                initial= 'hidden'
                animate='visible'>
                    <h1>CODING PROJECTS</h1>
                </motion.div>
                <div className='projectDisplay'>
                    <motion.div>
                        <Project title='Darling Dreams (2023 Capstone)'
                        description='A full-stack application to find & support your black/brown artists & entrepreneurs around Texas/the United States!'
                        link='https://github.com/NotNanetteKaye/capstone2022'
                        photo= {darlingDreams} />
                    </motion.div>
                    <motion.div>
                        <Project title='Youtube Minus the Ads (2022)'
                            description='A full-stack application utilizing the YoutubeAPI with user ability to add, delete, and view comments.'
                            link='https://github.com/NotNanetteKaye/youtube-clone'
                            photo = {youtubeClone} />
                    </motion.div>
                </div>
            </div>
            <div className='videographyScene'>
                <motion.div variants={projectVariant}
                initial= 'hidden'
                animate='visible'>
                    <h1>VIDEOGRAPHY</h1>
                </motion.div>
                <div className='projectDisplay'>
                    <motion.div>
                        <Project title='Delta Phi Omega 2020 Fall Class Reveal Video'
                            description='I created a Full House inspired class reveal video to virtually introduce our Fall 2020 Recruits to the Multicultural Greek Council at Texas Tech University. '
                            link='https://www.instagram.com/reel/CH_MO4tni4A/'
                            photo= {revealVideo} />
                    </motion.div>
                    <motion.div>
                        <Project title='Delta Phi Omega 2020 Fall Recruitment Video'
                            description='I created a technology-inspired video for fall recruitment, which was inspired by the exarcebated digital dependance caused by the COVID-19 pandemic.'
                            link='https://www.instagram.com/p/CE7_xAABfiu/'
                            photo= {recruitmentVideo} />
                    </motion.div>
                </div>
                
            </div> 
            <Footer />
        </div>
    )
}

export default PortfolioPage;