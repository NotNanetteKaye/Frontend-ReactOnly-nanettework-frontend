// Image imports 
import darlingDreams from '../../coding_images/capstoneImage.png';
import youtubeClone from '../../coding_images/youtubeclone.png';

// .CSS imports
import 'react-multi-carousel/lib/styles.css';
import '../PortfolioPage/PortfolioPage.css';

import React from 'react';
import Carousel from 'react-elastic-carousel';
import { FaReact, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiDjango, SiJavascript } from 'react-icons/si';
import { motion } from "framer-motion";


// carousel tutorial to follow: https://www.youtube.com/watch?v=R5O5lLIph9Y
// carousel-elastic: https://www.npmjs.com/package/react-elastic-carousel


const PortfolioPage = () => {
    const carouselIcons = [
        { width: 1, itemsToShow: 1},
        { width: 1, itemsToShow: 2},
        { width: 1, itemsToShow: 3},
    ]

    const projectVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    const Project = ({ title, description, link, photo }) => {
        return (
            <motion.div variants={projectVariant}>
            < a
                href={link}
                target="_blank"
                rel="noreferrer"
            >
                    <div className='individualProjects'>
                            <img src={photo} alt={title} width='300mm'/>
                            <div className='projectDetails'>
                                <h1>{title}</h1>
                                <p>{description}</p>
                            </div>
                    </div>
            </a>
            </motion.div>
        );
    }; 

    return(
        <div className='portfolioPageLayout'>
            <div className='portfolioHeaderTitle'>
                <h1>PORTFOLIO</h1>
                <div className='Carousel'>
                    <Carousel breakPoints={carouselIcons}
                    >
                        <FaReact size={100} />
                        <FaPython size={100} />
                        <FaHtml5 size={100}/>
                        <FaCss3Alt size={100} />
                        <SiDjango size={100} />
                        <SiJavascript size={100} />
                    </Carousel>
                </div>
            </div>
            <div className='codingScene'>
                <h2>CODING PROJECTS</h2>
                <div className='projectDisplay'>
                    <Project title='Darling Dreams'
                    description='Find black/brown artists & entrepreneurs in Texas'
                    link='https://github.com/NotNanetteKaye/capstone2022'
                    photo= {darlingDreams} />
                    <Project title='Youtube Minus the Ads'
                    description='A video player full-stack application utilizing the YoutubeAPI with user ability to leave comments'
                    link='https://github.com/NotNanetteKaye/youtube-clone'
                    photo = {youtubeClone} />
                </div>
            </div>
            <div className='videographyScene'>
                <h2>VIDEOGRAPHY</h2>
            </div>
            <div className='photographyScene'> 
                <h2>PHOTOGRAPHY</h2>
            </div>
        </div>
    )
}

export default PortfolioPage;