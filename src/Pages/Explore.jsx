import React, { useState, useEffect } from 'react';
import { FaPlane, FaBus, FaTrain, FaHorseHead, FaMapMarkerAlt } from 'react-icons/fa';
import './Explore.css';

const destinations = [
  {
    id: 1,
    place: "Eiffel Tower, Paris",
    transport: "plane",
    info: "The iron heart of France. An architectural masterpiece reaching for the Parisian clouds.",
    images: [
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1000",
      "https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=1000"
    ]
  },
  {
    id: 2,
    place: "Varanasi, India",
    transport: "horse",
    info: "The spiritual capital. Journey through ancient narrow lanes where history breathes.",
    images: [
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1000",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1000"
    ]
  },
  {
    id: 3,
    place: "Taj Mahal, Agra",
    transport: "bus",
    info: "A monument of love. Perfectly symmetrical marble that glows with the rising sun.",
    images: [
      "https://images.unsplash.com/photo-1564507592333-c60657ece523?q=80&w=1000",
      "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=1000"
    ]
  },
  {
    id: 4,
    place: "Kashmir Valley",
    transport: "train",
    info: "Heaven on Earth. Snow-capped peaks and serene lakes that define tranquility.",
    images: [
      "https://images.unsplash.com/photo-1562692233-138374d6e19f?q=80&w=1000",
      "https://images.unsplash.com/photo-1598305371124-42ad19712a42?q=80&w=1000"
    ]
  },
  {
    id: 5,
    place: "Dubai Skyline",
    transport: "plane",
    info: "Where the future lives. A desert oasis of steel and glass touching the sky.",
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000"
    ]
  },
  {
    id: 6,
    place: "Old City Heritage",
    transport: "horse",
    info: "Explore the vintage roots of the city via traditional royal carriages.",
    images: [
      "https://images.unsplash.com/photo-1551882547-ff43c63fedfe?q=80&w=1000",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000"
    ]
  }
];

const Explore = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getTransportIcon = (type) => {
    if (type === "plane") return <FaPlane />;
    if (type === "bus") return <FaBus />;
    if (type === "train") return <FaTrain />;
    if (type === "horse") return <FaHorseHead />;
    return <FaPlane />;
  };

  return (
    <div className="explore-white-theme">
      <header className="agency-title">
        <h1 className="outline-h1">EXPLORE <span className="solid-h1">WORLD</span></h1>
        <p>Your Journey, Our Craft</p>
      </header>

      <div className="box-grid">
        {destinations.map((dest) => (
          <div key={dest.id} className="button-89-box">
            <div className="card-content">
              {/* Image Morphing Box */}
              <div className="image-stack">
                {dest.images.map((img, i) => (
                  <img 
                    key={i}
                    src={img} 
                    alt={dest.place} 
                    className={`morph-img ${i === index ? 'active' : ''}`}
                  />
                ))}
              </div>

              {/* Text Information */}
              <div className="info-area">
                <div className="lino-icon-wrapper">
                  {getTransportIcon(dest.transport)}
                </div>
                <span className="dest-label"><FaMapMarkerAlt /> {dest.place}</span>
                <h3>{dest.place.split(',')[0]}</h3>
                <p>{dest.info}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;