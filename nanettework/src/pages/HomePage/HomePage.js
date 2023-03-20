// General Imports
import React from 'react';
import '../HomePage/HomePage.css';

// Component Imports
import Footer from '../../components/Footer/Footer'

// TO-DO'S
// 🤔: Logo for personal portfolio
const HomePage = () => {
    return (
        <div className='NKDLayout'>
          <div className='headerImage'>
            <div id='fixed'></div>
            <div id='remainingSpace'></div>
          </div>
          
          <div className='about'>
            <div id='image'></div>
            <div id='words'>
              <div className='aboutWords'>
              <h1>Mabuhay, I am Nanette!</h1>
              <h5>My name is Nanette (she/her/siya), and I am happy you are here. Raised by a healthcare hero mama and sailor papa, my values remain firm in pursuing a lifestyle that advocates for others while forging my own unforgettable adventures.</h5>
              <h5>From a young age, I deeply admired the arts. I see beauty in everything around me and want to encourage others to bask in life's delights.</h5>
              <h5>Experiences in coding, photography, and videography allow me to help others transform their visions, ideas, & stories into reality through the utilization of digital pixels.</h5>
              <div className='resumeButton'>
                <a href='https://docs.google.com/document/d/1pGIYk2sPJc_T1TTKB1xkXV5Fi4P3vjlUrOiKNnw4NMQ/edit?usp=sharing'
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