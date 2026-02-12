import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';
import WhatsAppButton from './Pages/WhatsAppButton';

// Context Provider
import { NavProvider } from './context/NavbarContext'; 

// Page Components
import Home from './Pages/Home';
import About from './Pages/About';
import Explore from './Pages/Explore';
import GroupBooking from './Pages/GroupBooking';

// Global Styles
import './App.css';

/**
 * GEMINI NOTE: 
 * Ensure your folder name is spelled exactly 'componenets' (with the extra 'e') 
 * as per your import path, or rename the folder to 'components' and update imports.
 */

function App() {
  return (
    <NavProvider>
      <Router>
        <div className="app-container">
          {/* Sticky Navigation */}
          <Navbar />

          <main className="content-wrapper">
            <Routes>
              {/* Home Page: The Landing Hero */}
              <Route path="/" element={<Home />} />
              
              {/* About Page: Agency Story */}
              <Route path="/about" element={<About />} />
              
              {/* Explore Page: The 6-Box Destination Gallery with Stickers */}
              <Route path="/explore" element={<Explore />} />
              
              {/* Group Booking Page: The Button-89 Styled Form */}
              <Route path="/GroupBooking" element={<GroupBooking />} />
            </Routes>
          </main>

          {/* Site Footer */}
          <Footer />

          {/* Floating WhatsApp Sticker Button */}
          <WhatsAppButton />
        </div>
      </Router>
    </NavProvider>
  );
}

export default App;