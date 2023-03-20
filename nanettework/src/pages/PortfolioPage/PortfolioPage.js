 // Image Imports
import darlingDreams from '../../portfolio_images/capstoneImage.png';
import youtubeClone from '../../portfolio_images/youtubeclone.png';
import recruitmentVideo from '../../portfolio_images/horizontalVideo.png';
import revealVideo from '../../portfolio_images/verticalVideo.png';

// CSS Imports
import 'react-multi-carousel/lib/styles.css';
import '../PortfolioPage/PortfolioPage.css';

import React from 'react';
import { FaReact, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiDjango, SiJavascript, SiMysql } from 'react-icons/si';
import { motion } from "framer-motion";
import Footer from '../../components/Footer/Footer';


const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: {type: 'spring'}},
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
                <div className='individualProjects'>
                    <img src={photo} alt={title} width='%' height='50%'/>
                    <div className='individualProjectDetails'>
                        <h3>{title}</h3>
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
                
            </div>
            <div className='codingScene'>
                <h1>CODING PROJECTS</h1>
                <div className='projectDisplay'>
                    <motion.div>
                        <Project title='Darling Dreams'
                        description='Find black/brown artists & entrepreneurs in Texas'
                        link='https://github.com/NotNanetteKaye/capstone2022'
                        photo= {darlingDreams} />
                    </motion.div>
                    <motion.div>
                        <Project title='Youtube Minus the Ads'
                            description='A video player full-stack application utilizing the YoutubeAPI with user ability to leave comments'
                            link='https://github.com/NotNanetteKaye/youtube-clone'
                            photo = {youtubeClone} />
                    </motion.div>
                </div>
            </div>
            <div className='videographyScene'>
                <h1>VIDEOGRAPHY</h1>
                <div className='projectDisplay'>
                    <motion.div>
                        <Project title='Reveal Video'
                            description='Full House inspired class reveal video'
                            link='https://www.instagram.com/reel/CH_MO4tni4A/'
                            photo= {revealVideo} />
                    </motion.div>
                    <motion.div>
                        <Project title='DPO 2020 Recruitment Video'
                            description='Video inspired by the exarcebated digital dependance due to COVID-19'
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