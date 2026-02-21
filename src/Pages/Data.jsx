export const destinations = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Expedition ${i + 1}`,
  location: ['Himalayas', 'Bali', 'Swiss Alps', 'Iceland'][i % 4],
  category: ['Nature', 'Adventure', 'Religious'][i % 3],
  price: Math.floor(Math.random() * 500) + 200,
  image: `https://picsum.photos/seed/${i + 100}/600/800`,
  rating: (Math.random() * (5 - 4) + 4).toFixed(1)
}));