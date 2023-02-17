// General Imports
import './App.css';

// Component Imports
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className='NKDLayout'>
      <NavBar />
      <div className='headerWithTitle'>
      </div>
      <div className='about'>
        <div className='aboutImage'>
        </div>
        <div className='aboutWords'>
          <h1>ABOUT</h1>
          <h5>Hello, I am happy you are here! Raised by a healthcare hero mama and sailor papa,  I ultimately knew my life would be dedicated to serving those around me while forging my own unforgettable adventures.</h5>
        </div>
      </div>
      <div className='footer'>
        <h4> © 2023 Nanette Kaye Dolera. All rights reserved.  </h4>
      </div>
    </div>
  );
}

export default App;


//         <h4>© 2023 Nanette Kaye Dolera. All rights reserved. </h4>