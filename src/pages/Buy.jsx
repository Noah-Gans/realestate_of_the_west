import { useState } from 'react'
import './Buy.css'

function Buy() {
  const [filters, setFilters] = useState({
    location: '',
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    bathrooms: ''
  })

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="buy-page">
      <div className="page-header">
        <div className="container">
          <h1>BUY</h1>
          <p>Find your dream home in Wyoming</p>
        </div>
      </div>

      <div className="buy-content">
        <div className="container">
          <div className="filters-section">
            <h2>Search Properties</h2>
            <div className="filters-grid">
              <div className="filter-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="City or ZIP"
                  value={filters.location}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="filter-group">
                <label htmlFor="minPrice">Min Price</label>
                <input
                  type="number"
                  id="minPrice"
                  name="minPrice"
                  placeholder="$0"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="filter-group">
                <label htmlFor="maxPrice">Max Price</label>
                <input
                  type="number"
                  id="maxPrice"
                  name="maxPrice"
                  placeholder="$10,000,000"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                />
              </div>
              <div className="filter-group">
                <label htmlFor="bedrooms">Bedrooms</label>
                <select
                  id="bedrooms"
                  name="bedrooms"
                  value={filters.bedrooms}
                  onChange={handleFilterChange}
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>
              <div className="filter-group">
                <label htmlFor="bathrooms">Bathrooms</label>
                <select
                  id="bathrooms"
                  name="bathrooms"
                  value={filters.bathrooms}
                  onChange={handleFilterChange}
                >
                  <option value="">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>
              <div className="filter-group">
                <button className="search-btn">Search</button>
              </div>
            </div>
          </div>

          <div className="map-section">
            <h2>Property Map</h2>
            <div className="map-container">
              {/* HomeFinder Integration */}
              <iframe
                src="https://www.homefinder.com/widgets/search?agentId=YOUR_AGENT_ID&theme=default"
                title="Property Search Map"
                className="homefinder-iframe"
                allowFullScreen
              />
              <div className="map-fallback">
                <p>Interactive property map powered by HomeFinder</p>
                <p>To integrate HomeFinder, replace the iframe src with your HomeFinder widget URL</p>
                <a 
                  href="https://www.homefinder.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="homefinder-link"
                >
                  Learn more about HomeFinder
                </a>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <h2>Need Help Finding Your Dream Home?</h2>
            <p>Our experienced team is here to help you find the perfect property in Wyoming.</p>
            <div className="cta-buttons">
              <a href="tel:1-307-851-0881" className="cta-btn">Call Us: 1-307-851-0881</a>
              <a href="mailto:REofthewest@gmail.com" className="cta-btn">Email Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buy

