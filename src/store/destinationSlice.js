import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Our "Database" of 12 destinations
  destinations: [
    { id: 1, title: "Emirates Expedition", price: 2500, img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000", category: "Luxury" },
    { id: 2, title: "European Archive", price: 4200, img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000", category: "Heritage" },
    { id: 3, title: "Asian Heritage", price: 1800, img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000", category: "Culture" },
    { id: 4, title: "Swiss Alpinist", price: 3100, img: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?q=80&w=1000", category: "Adventure" },
    { id: 5, title: "Maldivian Azure", price: 5500, img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000", category: "Beach" },
    { id: 6, title: "Santorini Sunset", price: 2900, img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000", category: "Romantic" },
    { id: 7, title: "Nordic Aurora", price: 3800, img: "https://images.unsplash.com/photo-1531366930491-81747a781444?q=80&w=1000", category: "Adventure" },
    { id: 8, title: "Amalfi Coastline", price: 4500, img: "https://images.unsplash.com/photo-1633321088355-d0f81134ca3b?q=80&w=1000", category: "Luxury" },
    { id: 9, title: "Kyoto Zen", price: 2100, img: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000", category: "Culture" },
    { id: 10, title: "Safari Serengeti", price: 6200, img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000", category: "Wildlife" },
    { id: 11, title: "Balinese Escape", price: 1500, img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000", category: "Nature" },
    { id: 12, title: "Icelandic Fire", price: 3300, img: "https://images.unsplash.com/photo-1521033335978-50679b520c41?q=80&w=1000", category: "Nature" }
  ],
  cartItems: [],
  taxRate: 0.12, // 12% Tax
};

const destinationSlice = createSlice({
  name: 'destinations',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Logic to prevent duplicate bookings
      const exists = state.cartItems.find(item => item.id === action.payload.id);
      if (!exists) {
        state.cartItems.push(action.payload);
      }
    },
    // ADDED: This fixes the "export not found" error
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    }
  }
});

export const { addToCart, removeFromCart } = destinationSlice.actions;
export default destinationSlice.reducer;