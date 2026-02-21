import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- TOASTIFY SETUP ---
// Only one Container should exist in the entire project
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// --- CONTEXT PROVIDERS ---
import { NavProvider } from './context/NavbarContext'; 
import { AuthProvider } from './context/AuthContext';
import { ReviewProvider } from './context/ReviewContext'; 
import { DestinationProvider } from './context/DestinationContext';

// --- COMPONENTS & LAYOUT ---
import Navbar from './componenets/Navbar'; 
import Footer from './componenets/Footer';
import WhatsAppButton from './Pages/WhatsAppButton';

// --- PAGES ---
import Home from './Pages/Home';
import About from './Pages/About';
import Explore from './Pages/Explore';
import Reviews from './Pages/Review';
import Contact from './Pages/Contact';
import Destinations from './Pages/Destinations';
import Login from './Pages/Login';
import Register from './Pages/Register';
import BookNow from './Pages/BookNow'; 
import Ticket from './Pages/Ticket';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <NavProvider>
        <ReviewProvider> 
          <DestinationProvider> 
            <Router>
              <div className="app-container">
                
                {/* GLOBAL TOAST CONFIGURATION (Show only one) */}
                <ToastContainer 
                  position="top-right" 
                  autoClose={3000} 
                  theme="dark" 
                  limit={1} // Strictly ensures only 1 toast shows at a time
                  hideProgressBar={false}
                  newestOnTop={true}
                  closeOnClick
                  pauseOnHover
                />
                
                <Navbar />
                
                <main className="content-wrapper">
                  <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/destinations" element={<Destinations />} />
                    
                    {/* Auth Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    
                    {/* Action Routes */}
                    <Route path="/book" element={<BookNow />} /> 
                    <Route path="/ticket" element={<Ticket />} />
                  </Routes>
                </main>

                <Footer />
                <WhatsAppButton />
              </div>
            </Router>
          </DestinationProvider>
        </ReviewProvider>
      </NavProvider>
    </AuthProvider>
  );
}

export default App;