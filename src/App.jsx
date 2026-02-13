// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// // Layout Components
// import Navbar from './componenets/Navbar'; // Kept your specific spelling
// import Footer from './componenets/Footer';
// import WhatsAppButton from './Pages/WhatsAppButton';

// // Context & Redux Providers
// import { NavProvider } from './context/NavbarContext'; 
// import { AuthProvider } from './context/AuthContext'; // NEW: Auth Context

// // Page Components
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Explore from './Pages/Explore';
// import GroupBooking from './Pages/GroupBooking';
// import Reviews from './Pages/Review';
// import Login from './Pages/Login'; // NEW
// // import Contact from './Pages/Contact'; // NEW
// // import TourDetail from './Pages/TourDetail'; // NEW: Dynamic Tour Page

// // Global Styles
// import './App.css';

// function App() {
//   // Define links to pass as PROPS to Navbar
//   const navLinks = [
//     { label: 'Home', path: '/' },
//     { label: 'About', path: '/about' },
//     { label: 'Explore', path: '/explore' },
//     // { label: 'Contact', path: '/contact' }
//   ];

//   return (
//     <AuthProvider>
//       <NavProvider>
//         <Router>
//           <div className="app-container">
//             {/* Navbar using PROPS for brand and links */}
//             <Navbar brand="UMIYA TRAVELS" links={navLinks} />

//             <main className="content-wrapper">
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/explore" element={<Explore />} />
//                 <Route path="/GroupBooking" element={<GroupBooking />} />
//                 <Route path="/Reviews" element={<Reviews />} />
                
//                 {/* NEW ROUTES */}
//                 <Route path="/login" element={<Login />} />
//                 {/* <Route path="/contact" element={<Contact />} /> */}
                
//                 {/* Dynamic Route for Tours (Spiritual, Adventure, Heritage) */}
//                 {/* <Route path="/tours/:categoryId" element={<TourDetail />} /> */}
//               </Routes>
//             </main>

//             <Footer />
//             <WhatsAppButton />
//           </div>
//         </Router>
//       </NavProvider>
//     </AuthProvider>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componenets/Navbar';
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