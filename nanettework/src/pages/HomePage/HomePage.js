// General Imports
import React from 'react';
import '../HomePage/HomePage.css';
import nani from '../../portfolio_images/nanifrontpic.jpg'

// Component Imports
import Footer from '../../components/Footer/Footer'

// TO-DO'S
// 🤔: Replace logo for personal portfolio
const HomePage = () => {
    return (
        <div className='NKDLayout'>
          <div className='headerImage'>
            <img src={nani} alt='Nani' width={'100%'}/>
          </div>

          <div className='aboutContainer'>
            <div className='imageContainer'></div>
            <div className='wordsContainer'>
              <div id='aboutWords'>
              <h1>Mabuhay, I am Nanette!</h1>
              <h5>My name is Nanette (she/her/siya), and I am happy you are here. Raised by a healthcare hero mama and sailor papa, my values remain firm in pursuing a lifestyle that advocates for others while forging my own unforgettable adventures.</h5>
              <h5>From a young age, I deeply admired the arts. I see beauty in everything around me and want to encourage others to bask in life's delights.</h5>
              <h5>Experiences in coding, photography, and videography allow me to help others transform their visions, ideas, & stories into reality through the utilization of digital pixels.</h5>
              <div id='resumeButton'>
                <a href='https://docs.google.com/document/d/1pS1E-Np_G6mai3XbuuLbHcpu6ID4KrJAI7fOxEQSPXk/edit?usp=sharing'
              target="_blank"
              rel="noreferrer">
               resume!
                </a>
              </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      );
}
 
export default HomePage;