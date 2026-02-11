import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { NavProvider } from './context/NavbarContext';

// Components & Pages
import Navbar from './componenets/Navbar'; 
import Home from './Pages/Home';
import About from './Pages/About';
import './App.css';

// --- Scroll To Top Helper ---
// This ensures that when you click a link, the new page starts at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <NavProvider>
      <Router>
        <ScrollToTop />
        
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />


            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

=      </Router>
    </NavProvider>
  );
}

export default App;