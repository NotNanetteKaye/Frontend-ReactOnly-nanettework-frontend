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
              <h1>Mabuhay, I am Nanette!</h1>
              <h5>My name is Nanette (she/her/siya), and I am happy you are here. Raised by a healthcare hero mama and sailor papa, my values remain firm in pursuing a lifestyle that advocates for others while forging my own unforgettable adventures.</h5>
              <h5>From a young age, I deeply admired the arts. I see beauty in everything around me and want to encourage others to bask in life's delights.</h5>
              <h5>Experiences in coding, photography, and videography allow me to help others transform their visions, ideas, & stories into reality through the utilization of digital pixels.</h5>
              <a href='https://drive.google.com/file/d/10Ghf2zFESwT6ql9p6OKEas-PA50w8n3d/view'>Resume</a>

            </div>
          </div>
        </div>
      );
}
 
export default HomePage;