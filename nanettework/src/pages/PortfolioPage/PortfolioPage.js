import React from "react";
import Carousel from 'react-multi-carousel';
import { FaReact } from 'react-icons/fa'
import 'react-multi-carousel/lib/styles.css'
import '../PortfolioPage/PortfolioPage.css'



const PortfolioPage = () => {
    const responsive = {
        desktop: {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return(
        <div className='portfolioPageLayout'>
            <div className='portfolioHeaderTitle'>
                <h1>PORTFOLIO</h1>
                <div className='carouselSample'>
                    <CarouselComponent>

                    </CarouselComponent>
                </div>
                <FaReact size={100} />
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