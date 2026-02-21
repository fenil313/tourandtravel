import React from 'react';
import SacredCard from '../components/SacredCard'; // Reusing your premium card UI
import './Category.css';

// Imagine these are your high-quality assets
import s1 from '../assets/spiritual-1.jpg';
import a1 from '../assets/adventure-1.jpg';
import h1 from '../assets/heritage-1.jpg';

const categoryData = {
  Spiritual: {
    title: "Spiritual",
    subtitle: "Inner Peace & Sacred Spaces",
    tours: [
      { id: "S1", city: "Varanasi", mantra: "The Eternal City", price: 500, img: s1 },
      { id: "S2", city: "Rishikesh", mantra: "Yoga Capital", price: 400, img: s1 },
    ]
  },
  Adventure: {
    title: "Adventure",
    subtitle: "Push Your Limits",
    tours: [
      { id: "A1", city: "Ladakh", mantra: "The Land of High Passes", price: 800, img: a1 },
      { id: "A2", city: "Manali", mantara: "Valley of Gods", price: 600, img: a1 },
    ]
  },
  Heritage: {
    title: "Heritage",
    subtitle: "Timeless Architecture",
    tours: [
      { id: "H1", city: "Hampi", mantra: "Forgotten Empire", price: 450, img: h1 },
      { id: "H2", city: "Jaipur", mantra: "The Pink City", price: 550, img: h1 },
    ]
  }
};

const Category = ({ card }) => {
  const data = categoryData[card] || categoryData.Spiritual;

  return (
    <div className={`category-page-v2 ${card.toLowerCase()}-theme`}>
      <header className="category-hero">
        <span className="top-label">{data.subtitle}</span>
        <h1>{data.title} <span>Journeys</span></h1>
      </header>

      <div className="category-grid">
        {data.tours.map(tour => (
          <SacredCard key={tour.id} {...tour} path={card} />
        ))}
      </div>
    </div>
  );
};

export default Category;