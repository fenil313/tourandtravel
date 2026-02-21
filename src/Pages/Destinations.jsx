import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaChevronRight, FaChevronLeft, FaMapMarkerAlt, FaFilter } from 'react-icons/fa';
import { addToCart } from '../store/destinationSlice';
import { useDestinations } from '../context/DestinationContext';
import '../styles/Destinations.css';

const Destinations = () => {
  const { filteredDestinations, categories, selectedCategory, setSelectedCategory } = useDestinations();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState(60000);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Updated to 6 items per page
  const itemsPerPage = 6; 

  const finalResults = useMemo(() => {
    return filteredDestinations.filter(loc => {
      const matchesSearch = loc.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = loc.price <= maxPrice;
      return matchesSearch && matchesPrice;
    });
  }, [filteredDestinations, searchTerm, maxPrice]);

  const totalPages = Math.ceil(finalResults.length / itemsPerPage);
  const currentItems = finalResults.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleBook = (loc) => {
    dispatch(addToCart({
      id: loc.id,
      title: loc.name,
      img: loc.image,
      price: loc.price
    }));
    navigate('/book');
  };

  return (
    <div className="dest-master-wrapper">
      {/* 1. Navbar Spacer: Prevents Navbar from overlapping content */}
      <div className="nav-safe-gap"></div>

      <div className="dest-layout-grid">
        {/* --- SIDEBAR --- */}
        <aside className="dest-sidebar-nav">
          <div className="sidebar-sticky-inner">
            <h2 className="brand-title">VOYAGER<span>.</span></h2>
            
            <div className="filter-group">
              <label><FaSearch /> SEARCH</label>
              <input 
                type="text" 
                placeholder="Find a journey..." 
                onChange={(e) => {setSearchTerm(e.target.value); setCurrentPage(1);}} 
              />
            </div>

            <div className="filter-group">
              <label><FaFilter /> CATEGORY</label>
              <div className="category-stack">
                {categories.map(cat => (
                  <button 
                    key={cat} 
                    className={selectedCategory === cat ? 'cat-btn-active' : ''} 
                    onClick={() => {setSelectedCategory(cat); setCurrentPage(1);}}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label>BUDGET: <span className="price-tag-side">₹{Number(maxPrice).toLocaleString()}</span></label>
              <input 
                type="range" min="10000" max="60000" step="500"
                value={maxPrice} 
                onChange={(e) => setMaxPrice(e.target.value)} 
                className="custom-range-slider" 
              />
            </div>
          </div>
        </aside>

        {/* --- MAIN CONTENT AREA --- */}
        <main className="dest-main-view">
          <header className="dest-view-header">
            <div className="header-info-box">
              <h1>The <span>Archive</span></h1>
              <p>Curating {finalResults.length} premium destinations</p>
            </div>
            
            <div className="pagination-box">
              <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>
                <FaChevronLeft />
              </button>
              <span className="page-indicator">{currentPage} / {totalPages}</span>
              <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>
                <FaChevronRight />
              </button>
            </div>
          </header>

          <div className="dest-images-grid">
            {currentItems.map(loc => (
              <div className="dest-card-box" key={loc.id}>
                <div className="card-media-wrapper">
                  <img src={loc.image} alt={loc.name} />
                  <div className="card-price-overlay">₹{loc.price.toLocaleString()}</div>
                </div>
                <div className="card-content-wrapper">
                  <span className="card-category-text">{loc.category}</span>
                  <h3 className="card-title-text">{loc.name}</h3>
                  <p className="card-desc-text">All-inclusive premium travel package with private guides and luxury stays.</p>
                  <button className="card-book-btn" onClick={() => handleBook(loc)}>
                    RESERVE NOW <FaChevronRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Destinations;