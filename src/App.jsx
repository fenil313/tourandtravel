import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componenets/Navbar'; // Keeping your spelling: componenets
import Footer from './componenets/Footer';
import WhatsAppButton from './Pages/WhatsAppButton';
import { NavProvider } from './context/NavbarContext'; 
import { AuthProvider } from './context/AuthContext';

import Home from './Pages/Home';
import About from './Pages/About';
import Explore from './Pages/Explore';
import GroupBooking from './Pages/GroupBooking';
import Reviews from './Pages/Review';
import Login from './Pages/Login';
import BookNow from './Pages/BookNow'; // NEW IMPORT
// import Contact from './Pages/Contact'; 
// import TourDetail from './Pages/TourDetail'; 

import './App.css';

function App() {
  return (
    <AuthProvider>
      <NavProvider>
        <Router>
          <div className="app-container">
            <Navbar />
            <main className="content-wrapper">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/GroupBooking" element={<GroupBooking />} />
                <Route path="/Reviews" element={<Reviews />} />
                <Route path="/login" element={<Login />} />
                
                {/* NEW ROUTE FOR BOOKING */}
                <Route path="/book" element={<BookNow />} /> 
                
                {/* <Route path="/contact" element={<Contact />} /> */}
                {/* <Route path="/tours/:categoryId" element={<TourDetail />} /> */}
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </Router>
      </NavProvider>
    </AuthProvider>
  );
}

export default App;