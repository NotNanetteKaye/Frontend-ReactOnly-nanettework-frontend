// General Imports
import React from "react";
import './HighlightsPage.css';



const HighlightsPage = () => {
    return (
        <div className='aboutLayout'>
          <div className='headerWithTitleAbout'>
            <div></div>
            <div>
              <h3 style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'space-around', marginLeft: '20mm', textShadow: '#0000003d 1px 0 10px', color: '#e7e7e7'}}>HIGHLIGHTS</h3>
            </div>
          </div>
          <div className='bio'>
          </div>
        </div>
      );
}
 
export default HighlightsPage;