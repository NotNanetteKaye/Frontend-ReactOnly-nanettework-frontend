// General Imports
import './App.css';
import { Routes, Route } from 'react-router-dom';

// Pages Imports
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';

// Component Imports
import NavBar from "./components/NavBar/NavBar";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/nanettekayedolera' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


//         <h4>© 2023 Nanette Kaye Dolera. All rights reserved. </h4>