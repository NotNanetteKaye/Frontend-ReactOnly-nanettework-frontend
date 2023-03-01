// General imports
import React from 'react';
import '../HomePage/HomePage.css'

// Component imports

const HomePage = () => {
    return (
        <div className='NKDLayout'>
          <div className='headerWithTitle'>
          </div>
          <div className='about'>
            <div className='aboutImage'>
            </div>
            <div className='aboutWords'>
              <h1>Mabuhay, I am Nanette</h1>
              <h5>My name is Nanette (she/her/siya), and I am happy you are here! Raised by a healthcare hero mama and sailor papa, my values remain firm in pursuing a lifestyle that advocates for others while forging my own unforgettable adventures.</h5>
              <h5>From a young age, I deeply admired the arts. I see the beauty in everything around me, and I hope to encourage others to also bask in life's delights.</h5>
              <h5>With experiences in coding, photography, and videography, allow me to help you communicate your vision to others by breathing life into your ideas & stories through digital pixels.</h5>
              <button>Resume</button>
            </div>
          </div>
        </div>
      );
}
 
export default HomePage;