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
      </div>
      <div className='footer'>
        <h4> © 2023 Nanette Kaye Dolera. All rights reserved.  </h4>
      </div>
    </div>
  );
}

export default App;


//         <h4>© 2023 Nanette Kaye Dolera. All rights reserved. </h4>