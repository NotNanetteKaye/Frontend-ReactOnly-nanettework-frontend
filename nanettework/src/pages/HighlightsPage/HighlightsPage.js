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
            <h2>2022</h2>
            <h3>August 6 2022: a day very special to me because I officially became the first person in my family to complete an American university! We were decked out or whatever during ceremony. ✨</h3>
            <h3>I recieved an award from the Texas Tech University recognizing my campus-wide efforts in advancing diversity, equity, and inclusion. Wreck 'em for life!</h3>
            <h3>I spent my senior year dedicating my thesis to the relationship between the immigration status and a child's well being. Publication details OTW!</h3>
          </div>
        </div>
      );
}
 
export default HighlightsPage;