import React from "react";
import Carousel from 'react-multi-carousel';
import { FaReact, FaPython, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiDjango, SiJavascript } from 'react-icons/si';
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
                <div className="w-full relative h-32">
                    <Carousel
                        infinite={true}
                        responsive={responsive}
                    >
                        <div style={{display:'flex', flex:'row', justifyContent:'center'}}>
                            <div className='carouselComponents'>
                                <FaReact size={100} />
                            </div>
                            <div className='carouselComponents'>
                                <FaPython size={100} />
                            </div>
                            <div className='carouselComponents'>
                                <FaHtml5 size={100}/>
                            </div>
                            <div className='carouselComponents'>
                                <FaCss3Alt size={100} />
                            </div>
                            <div className='carouselComponents'>
                                <SiDjango size={100} />
                            </div>
                            <div className='carouselComponents'>
                                <SiJavascript size={100} />
                            </div>
                        </div>
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