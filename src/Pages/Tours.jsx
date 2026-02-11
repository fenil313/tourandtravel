import React from 'react';

const Tours = () => {
  return (
    <section className="tours-page" style={{ padding: '140px 20px 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '30px' }}>
        
        {/* Search Sidebar (Matches your image) */}
        <aside className="search-sidebar" style={{ width: '300px', background: '#ffb606', padding: '30px', borderRadius: '5px' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Search Tour</h2>
          <input type="text" placeholder="Search Tour" style={{ width: '100%', padding: '12px', marginBottom: '10px', border: 'none' }} />
          <select style={{ width: '100%', padding: '12px', marginBottom: '10px' }}><option>Tour Type</option></select>
          <button style={{ width: '100%', padding: '12px', background: '#00adef', color: 'white', border: 'none', fontWeight: 'bold' }}>FIND TOURS</button>
        </aside>

        {/* Tour Grid */}
        <div className="tour-grid" style={{ flex: 1 }}>
          <h3>Showing 1-9 of 10 results</h3>
          {/* Your Tour Cards would map here */}
        </div>
        
      </div>
    </section>
  );
};

export default Tours;