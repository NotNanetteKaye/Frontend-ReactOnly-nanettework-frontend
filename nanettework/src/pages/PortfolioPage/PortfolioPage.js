import React, { Component } from 'react';
import Carousel from 'react-elastic-carousel';
import { FaReact, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiDjango, SiJavascript } from 'react-icons/si';
import 'react-multi-carousel/lib/styles.css'
import '../PortfolioPage/PortfolioPage.css'


const PortfolioPage = () => {
    const carouselIcons = [
        { width: 1, itemsToShow: 1},
        { width: 1, itemsToShow: 2},
        { width: 1, itemsToShow: 3},
      ]
    

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