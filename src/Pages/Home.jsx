import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft, FaStar, FaBarcode, FaAsterisk } from 'react-icons/fa';
import { useReviews } from '../context/ReviewContext';
import { useDestinations } from '../context/DestinationContext';
import '../styles/Home.css';

// Assets
import img1 from '../assets/travel-1.png';
import img2 from '../assets/travel-2.png';
import img3 from '../assets/travel-3.png';


// Assets - Partner Logos
import logoBooking from '../assets/logo-booking.png';
import logoAirbnb from '../assets/logo-airbnb.png';
import logoExpedia from '../assets/logo-expedia.png';
import logoTrip from '../assets/logo-tripadvisor.png';
import logoTrivago from '../assets/logo-trivago.png';

const slides = [
  { id: 1, title: "Umiya Travels", sub: "Premium Voyage", img: img1, loc: "Iceland" },
  { id: 2, title: "Umiya Travels", sub: "Coastal Escape", img: img2, loc: "Portugal" },
  { id: 3, title: "Umiya Travels", sub: "Desert Nomad", img: img3, loc: "Morocco" }
];

const Home = () => {
  const [active, setActive] = useState(0);
  const { reviews } = useReviews();
  const { filteredDestinations } = useDestinations(); 
  const navigate = useNavigate();

  // Define featuredDestinations for the Archive section
  const featuredDestinations = filteredDestinations ? filteredDestinations.slice(0, 3) : [];

  // Hero Auto-Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="luxury-root">

      {/* --- 01 HERO SECTION --- */}
      <section className="hero-editorial">
        <div className="hero-container">
          <div className="hero-text-side">
            <span className="eyebrow"><FaAsterisk /> EXPLORATION 1.0</span>
            <h1 className="display-title">
              {slides[active].title} <br />
              <span className="serif-italic">{slides[active].sub}</span>
            </h1>
            <div className="hero-controls">
              <button className="nav-btn" onClick={() => setActive(active === 0 ? slides.length - 1 : active - 1)}><FaArrowLeft /></button>
              <span className="index-num">0{active + 1} — 0{slides.length}</span>
              <button className="nav-btn" onClick={() => setActive((active + 1) % slides.length)}><FaArrowRight /></button>
            </div>
          </div>
          <div className="hero-visual-side">
            <div className="main-frame">
              <img src={slides[active].img} alt="Hero" key={active} className="zoom-fade" />
            </div>
          </div>
        </div>
      </section>

      {/* --- 02 ABOUT SECTION --- */}
      <section className="about-manifesto">
        <div className="container">
          <div className="manifesto-header">
            <div className="title-block">
              <span className="eyebrow">02 / About us </span>
              <h2 className="section-title">A New Perspective <br />On <span>Adventure</span></h2>
            </div>
            <div className="text-block">
              <p>We provide more than just a route; we provide a narrative. Our team of global architects curates every moment to ensure that your journey is as seamless as it is breathtaking.</p>
              <button className="minimal-btn" onClick={() => navigate('/about')}>READ THE MANIFESTO</button>
            </div>
          </div>

          <div className="image-masonry">
            <div className="masonry-item tall"><img src={img1} alt="Grid 1" /></div>
            <div className="masonry-item small"><img src={img2} alt="Grid 2" /></div>
            <div className="masonry-item wide"><img src={img3} alt="Grid 3" /></div>
          </div>
        </div>
      </section>


      {/* --- NEW: PARTNER MARQUEE SECTION --- */}
      {/* --- PARTNER MARQUEE SECTION --- */}
      {/* --- PARTNER MARQUEE SECTION --- */}
<section className="partner-marquee">
  <div className="marquee-label">
    <FaAsterisk /> OFFICIAL BOOKING PARTNERS
  </div>
  <div className="marquee-content">
    <div className="marquee-track">
      {/* Set 1 */}
      <img src={logoBooking} alt="Booking.com" />
      <img src={logoAirbnb} alt="Airbnb" />
      <img src={logoExpedia} alt="Expedia" />
      <img src={logoTrip} alt="Tripadvisor" />
      <img src={logoTrivago} alt="Trivago" />
      
      {/* Duplicate Set for Seamless Loop */}
      <img src={logoBooking} alt="Booking.com" />
      <img src={logoAirbnb} alt="Airbnb" />
      <img src={logoExpedia} alt="Expedia" />
      <img src={logoTrip} alt="Tripadvisor" />
      <img src={logoTrivago} alt="Trivago" />
    </div>
  </div>
</section>

      {/* --- 03 EXPLORE SECTION (Visual Highlights) --- */}
      <section className="explore-catalog">
        <div className="container">
          <div className="catalog-intro">
            <h2 className="section-title">Explore <span> Us</span></h2>
            <p>A curated shortlist of this season’s most profound landscapes.</p>
          </div>

          <div className="destination-grid">
            {slides.map((item) => (
              <div key={item.id} className="dest-card" onClick={() => navigate('/Explore')}>
                <div className="dest-img">
                  <img src={item.img} alt={item.sub} />
                  <div className="dest-overlay"><span>VIEW ROUTE</span></div>
                </div>
                <div className="dest-info">
                  <h3>{item.sub}</h3>
                  <p>{item.loc} // Premium Expedition</p>
                  <button className="arrow-link">EXPLORE <FaArrowRight /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 04 FEATURED ARCHIVE (Context Data) --- */}
      <section className="home-featured-archive">
        <div className="container">
          <header className="featured-header">
            <div className="header-text">
              <span className="eyebrow"><FaAsterisk /> 04 / THE COLLECTIONS</span>
              <h2 className="section-title">Latest <span>Manifestos</span></h2>
              <p className="subtitle">A selection of our most requested geographic narratives.</p>
            </div>
            <button className="minimal-btn" onClick={() => navigate('/Destinations')}>
              VIEW FULL ARCHIVE <FaArrowRight />
            </button>
          </header>

          <div className="featured-dest-grid">
            {featuredDestinations.map((loc) => (
              <div className="featured-card" key={loc.id} onClick={() => navigate('/Destinations')}>
                <div className="card-image-box">
                  <img src={loc.image} alt={loc.name} />
                  <div className="card-badge">₹{loc.price.toLocaleString()}</div>
                </div>
                <div className="card-details">
                  <span className="cat-tag">{loc.category}</span>
                  <h3>{loc.name}</h3>
                  <div className="card-footer">
                     <span>PREMIUM ACCESS</span>
                     <FaArrowRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 05 REVIEWS SECTION --- */}
      <section className="review-vignette">
        <div className="container">
          <span className="eyebrow center">GUEST TESTIMONIALS</span>
          <h2 className="section-title center">The <span>Voucher</span> of Trust</h2>

          <div className="ticket-container">
            {reviews.slice(0, 3).map((rev, i) => (
              <div key={i} className="luxury-ticket">
                <div className="ticket-left">
                  <div className="stars">
                    {[...Array(5)].map((_, s) => <FaStar key={s} />)}
                  </div>
                  <p className="quote">"{rev.comment}"</p>
                  <div className="passenger-info">
                    <span className="p-label">PASSENGER</span>
                    <span className="p-name">{rev.name}</span>
                  </div>
                </div>
                <div className="ticket-right">
                  <div className="barcode-side">
                    <FaBarcode style={{fontSize: '3rem'}} />
                    <span className="gate-code">GATE-0{i+1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;