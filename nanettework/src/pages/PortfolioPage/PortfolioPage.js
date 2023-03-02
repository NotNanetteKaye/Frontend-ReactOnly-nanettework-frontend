import React from "react";
import '../PortfolioPage/PortfolioPage.css'

const PortfolioPage = () => {
    return(
        <div className='portfolioPageLayout'>
            <div className='portfolioHeaderTitle'>
                <h1>PORTFOLIO</h1>
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