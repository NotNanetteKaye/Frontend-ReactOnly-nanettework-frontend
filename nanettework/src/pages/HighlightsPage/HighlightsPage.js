// General Imports
import React from "react";
import './HighlightsPage.css';
import Footer from '../../components/Footer/Footer'

// TO-DOs
// 🤔: Edit words

const HighlightsPage = () => {
    return (
        <div className='aboutLayout'>
          <div className='headerWithTitleAbout'>
            <div className='headerTitle'>
              <h3 class='slideInLeft' style={{textShadow: '#0000003d 1px 0 10px', color: '#e7e7e7'}}>HIGHLIGHTS</h3>
            </div>
          </div>
          <div className='bio'>
            <div className='words'>
              <h2>2022-23👩🏽‍🎓</h2>
              <li><a href='https://www.linkedin.com/in/nanettekayedolera/overlay/1635513823508/single-media-viewer/?profileId=ACoAACgXfKUBv58sL_IP_V0H6BBhkZgZJEk3VBM' target={"_blank"} rel='noreferrer'>Graduating from devCodeCamp</a> was my stepping stone to launching a career in tech</li>
              <li>August 6 2022: I officially became the first person in my family to complete an American university! <a href='https://www.everythinglubbock.com/news/local-news/texas-tech-2022-summer-commencement-schedule-announced/' target={"_blank"} rel="noreferrer">We were decked out or whatever during ceremony.</a>✨</li>
              <li>I recieved an award <a href='https://www.everythinglubbock.com/news/local-news/honorees-receive-presidents-excellence-awards-in-diversity-equity-inclusion-gender-equity/' target={"_blank"} rel='noreferrer'>from the Texas Tech President</a> recognizing my campus-wide efforts in advancing diversity, equity, and inclusion. Wreck 'em for life!</li>
              <li>I spent my senior year <a href='https://www.depts.ttu.edu/honors/academicsandenrichment/thesis/ThesisDay2022.php' target={"_blank"} rel='noreferrer'>researching the relationship between the immigration status and a child's well being </a> with Dr. Lara Johnson. Publication details OTW!</li>
              <h2>2021</h2>
              <li>I had <a href='https://mediacast.ttu.edu/Mediasite/Play/7f9bca3828b948bda47e3f1090813dad1d' target={"_blank"} rel='noreferrer'>my first Oprah moment</a> during the annual First Generation Week where I got to interview the TTU Honors College Dean!</li>
              <li>I co-lead LatinX/Hispanic Heritage Month alongside one of the best humans I met during my time at Texas Tech University. <a href='https://today.ttu.edu/posts/2021/10/Stories/Division-of-Diversity-Equity-Inclusion-Recaps-Hispanic-Latinx-Heritage-Month-Events' target={"_blank"} rel='noreferrer'>Check us out here :))</a> </li>
              <li>I was <a href='https://today.ttu.edu/posts/2021/03/Stories/phenomenal-women' target={"_blank"} rel='noreferrer'>featured in a video during TTU's 2021 Women's Herstory Month (0:33).</a> I love being a woman.</li>
              <h2>2020</h2>
              <li>When the coronies happened 😵‍💫. Nevertheless, I made sure celebrations of culture still continued - <a href='https://today.ttu.edu/posts/2020/05/Stories/apida-heritage-month-2020' target={"_blank"} rel='noreferrer'>even if that meant for the entire experience to be online.</a></li>
              <h2>2018👩🏽‍🎓</h2>
              <li>I graduated <a href='https://mywolfforthnews.com/fhs-top-1-5-percent-recognized-academic-excellence-banquet/' target={"_blank"} rel='noreferrer'>in the top 1.5%</a> of my District 2-6A Frenship High School Class of 700+ students.</li>
              <li>I receieved the Texas High School Coaches Association 2017-2018 Academic All-State Recipient to <a href='https://twitter.com/texashstennis/status/1008883887592927232' target={'_blank'} rel='noreferrer'>successfully wrap up a decade worth of tennis-ing.</a></li>
              <h2>2013</h2>
              <li>Learned at the ripe age of 13 the importance of excellence when <a href='https://hms.frenship.net/apps/pages/index.jsp?uREC_ID=769913&type=d&pREC_ID=1171817' target={"_blank"} rel='noreferrer'>I had my Serena Williams moment</a> of recieving the MVP award for my tennis team. 🎾</li>
            </div>
          </div>
          <Footer />
        </div>
      );
}
 
export default HighlightsPage;