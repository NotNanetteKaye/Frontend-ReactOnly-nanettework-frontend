// General Imports
import './App.css';

// Component Imports
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/NavBar/Footer/Footer';

function App() {
  return (
    <div className='NKDLayout'>
      <NavBar />
      <div className='headerWithTitle'>
      </div>
      <Footer />
    </div>
  );
}

export default App;
