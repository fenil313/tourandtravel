// // import React, { createContext, useContext, useState, useMemo } from 'react';

// // const DestinationContext = createContext();

// // export const DestinationProvider = ({ children }) => {
// //   const [selectedCategory, setSelectedCategory] = useState('All');

// //   const destinations = [
// //     { id: 1, name: "Kedarnath Sanctuary", category: "Religious", price: 45000, tag: "BESTSELLER", image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&q=80" },
// //     { id: 2, name: "Spiti Valley Trek", category: "Adventure", price: 38000, tag: "NEW", image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&q=80" },
// //     { id: 3, name: "Valley of Flowers", category: "Nature", price: 32000, tag: "SEASONAL", image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&q=80" },
// //     { id: 4, name: "Varanasi Ghats", category: "Religious", price: 25000, tag: "CLASSIC", image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&q=80" },
// //     { id: 5, name: "Leh Ladakh Circuit", category: "Adventure", price: 55000, tag: "PREMIUM", image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&q=80" },
// //     { id: 6, name: "Jim Corbett Safari", category: "Nature", price: 28000, tag: "WILDLIFE", image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&q=80" },
// //     { id: 7, name: "Amarnath Yatra", category: "Religious", price: 42000, tag: "SACRED", image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&q=80" },
// //     { id: 8, name: "Rishikesh Rafting", category: "Adventure", price: 15000, tag: "TRENDING", image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&q=80" },
// //     { id: 9, name: "Munnar Tea Estates", category: "Nature", price: 35000, tag: "RELAX", image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&q=80" },
// //     { id: 10, name: "Golden Temple", category: "Religious", price: 20000, tag: "PEACE", image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&q=80" },
// //     { id: 11, name: "Auli Ski Resort", category: "Adventure", price: 48000, tag: "WINTER", image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&q=80" },
// //     { id: 12, name: "Sundarbans Delta", category: "Nature", price: 31000, tag: "EXPLORE", image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&q=80" }
// //   ];

// //   // Logic to filter based on category
// //   const filteredDestinations = useMemo(() => {
// //     return selectedCategory === 'All' 
// //       ? destinations 
// //       : destinations.filter(d => d.category === selectedCategory);
// //   }, [selectedCategory]);

// //   return (
// //     <DestinationContext.Provider value={{ 
// //       destinations, 
// //       filteredDestinations, 
// //       selectedCategory, 
// //       setSelectedCategory 
// //     }}>
// //       {children}
// //     </DestinationContext.Provider>
// //   );
// // };

// // export const useDestinations = () => useContext(DestinationContext);

// import React, { createContext, useContext, useState, useMemo } from 'react';

// // Import all 12 local images
// import img1 from '../assets/travel-1.png';
// import img2 from '../assets/travel-2.jpg';
// import img3 from '../assets/travel-4.jpg';
// import img4 from '../assets/travel-3.jpg';
// import img5 from '../assets/travel-4.jpg';
// import img6 from '../assets/travel-2.jpg';
// import img7 from '../assets/travel-3.jpg';
// import img8 from '../assets/travel-2.jpg';
// import img9 from '../assets/travel-4.jpg';
// import img10 from '../assets/travel-1.jpg';
// import img11 from '../assets/travel-3.jpg';
// import img12 from '../assets/travel-2.jpg';

// const DestinationContext = createContext();

// export const DestinationProvider = ({ children }) => {
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   // Memoizing the static list for performance
//   const destinations = useMemo(() => [
//     { id: 1, name: "Kedarnath Sanctuary", category: "Religious", price: 45000, tag: "BESTSELLER", image: img1 },
//     { id: 2, name: "Spiti Valley Trek", category: "Adventure", price: 38000, tag: "NEW", image: img2 },
//     { id: 3, name: "Valley of Flowers", category: "Nature", price: 32000, tag: "SEASONAL", image: img3 },
//     { id: 4, name: "Varanasi Ghats", category: "Religious", price: 25000, tag: "CLASSIC", image: img4 },
//     { id: 5, name: "Leh Ladakh Circuit", category: "Adventure", price: 55000, tag: "PREMIUM", image: img5 },
//     { id: 6, name: "Jim Corbett Safari", category: "Nature", price: 28000, tag: "WILDLIFE", image: img6 },
//     { id: 7, name: "Amarnath Yatra", category: "Religious", price: 42000, tag: "SACRED", image: img7 },
//     { id: 8, name: "Rishikesh Rafting", category: "Adventure", price: 15000, tag: "TRENDING", image: img8 },
//     { id: 9, name: "Munnar Tea Estates", category: "Nature", price: 35000, tag: "RELAX", image: img9 },
//     { id: 10, name: "Golden Temple", category: "Religious", price: 20000, tag: "PEACE", image: img10 },
//     { id: 11, name: "Auli Ski Resort", category: "Adventure", price: 48000, tag: "WINTER", image: img11 },
//     { id: 12, name: "Sundarbans Delta", category: "Nature", price: 31000, tag: "EXPLORE", image: img12 }
//   ], []);

//   // Generate unique category list (All, Religious, Adventure, Nature)
//   const categories = useMemo(() => {
//     return ['All', ...new Set(destinations.map(item => item.category))];
//   }, [destinations]);

//   // Logic to filter based on category
//   const filteredDestinations = useMemo(() => {
//     return selectedCategory === 'All' 
//       ? destinations 
//       : destinations.filter(d => d.category === selectedCategory);
//   }, [selectedCategory, destinations]);

//   return (
//     <DestinationContext.Provider value={{ 
//       destinations, 
//       filteredDestinations, 
//       categories,
//       selectedCategory, 
//       setSelectedCategory 
//     }}>
//       {children}
//     </DestinationContext.Provider>
//   );
// };

// export const useDestinations = () => useContext(DestinationContext);
import React, { createContext, useContext, useState, useMemo } from 'react';

/** * IMPORTANT: Double-check your file extensions in the assets folder!
 * If your image is actually 'travel-1.jpg' but you import it as '.png', 
 * it will throw the "Module not found" error.
 */
import img1 from '../assets/kedarnath.jpg'; // Check if this is .png or .jpg
import img2 from '../assets/Kashmir Valley4.jpg';
import img3 from '../assets/flower.png';
import img4 from '../assets/travel-2.png';
import img5 from '../assets/1.png';
import img6 from '../assets/2.png';
import img7 from '../assets/3.png';
import img8 from '../assets/4.png';
import img9 from '../assets/5.png';
import img10 from '../assets/6.png'; // Verify if travel-1 exists as BOTH png and jpg
import img11 from '../assets/7.png';
import img12 from '../assets/8.png';

const DestinationContext = createContext();

export const DestinationProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const destinations = useMemo(() => [
    { id: 1, name: "Kedarnath Sanctuary", category: "Religious", price: 45000, tag: "BESTSELLER", image: img1 },
    { id: 2, name: "Spiti Valley Trek,Kashmir", category: "Adventure", price: 38000, tag: "NEW", image: img2 },
    { id: 3, name: "Valley of Flowers", category: "Nature", price: 32000, tag: "SEASONAL", image: img3 },
    { id: 4, name: "Varanasi Ghats", category: "Religious", price: 25000, tag: "CLASSIC", image: img4 },
    { id: 5, name: "Leh Ladakh Circuit", category: "Adventure", price: 55000, tag: "PREMIUM", image: img5 },
    { id: 6, name: "Jim Corbett Safari", category: "Nature", price: 28000, tag: "WILDLIFE", image: img6 },
    { id: 7, name: "Amarnath Yatra", category: "Religious", price: 42000, tag: "SACRED", image: img7 },
    { id: 8, name: "Rishikesh Rafting", category: "Adventure", price: 15000, tag: "TRENDING", image: img8 },
    { id: 9, name: "Munnar Tea Estates", category: "Nature", price: 35000, tag: "RELAX", image: img9 },
    { id: 10, name: "Golden Temple", category: "Religious", price: 20000, tag: "PEACE", image: img10 },
    { id: 11, name: "Auli Ski Resort", category: "Adventure", price: 48000, tag: "WINTER", image: img11 },
    { id: 12, name: "Sundarbans Delta", category: "Nature", price: 31000, tag: "EXPLORE", image: img12 }
  ], []);

  // Automatically extracts unique categories: ["All", "Religious", "Adventure", "Nature"]
  const categories = useMemo(() => {
    return ['All', ...new Set(destinations.map(item => item.category))];
  }, [destinations]);

  const filteredDestinations = useMemo(() => {
    return selectedCategory === 'All' 
      ? destinations 
      : destinations.filter(d => d.category === selectedCategory);
  }, [selectedCategory, destinations]);

  return (
    <DestinationContext.Provider value={{ 
      destinations, 
      filteredDestinations, 
      categories,
      selectedCategory, 
      setSelectedCategory 
    }}>
      {children}
    </DestinationContext.Provider>
  );
};

export const useDestinations = () => useContext(DestinationContext);