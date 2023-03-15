// General Imports
import './App.css';
import { Routes, Route } from 'react-router-dom';

// Pages Imports
import HomePage from './pages/HomePage/HomePage';
import HighlightsPage from './pages/HighlightsPage/HighlightsPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';

// Component Imports
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/nanettekayedolera' element={<HomePage />} />
        <Route path='/highlights' element={<HighlightsPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
      </Routes>
    </div>
  );
}

export default App;


//         <h4>© 2023 Nanette Kaye Dolera. All rights reserved. </h4>