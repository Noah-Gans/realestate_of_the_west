import './App.css'

function App() {
  const properties = [
    {
      id: 1,
      title: "Modern Mountain Retreat",
      location: "Aspen, CO",
      price: "$2,450,000",
      beds: 4,
      baths: 3,
      sqft: "3,200",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
    },
    {
      id: 2,
      title: "Luxury Desert Oasis",
      location: "Scottsdale, AZ",
      price: "$1,850,000",
      beds: 5,
      baths: 4,
      sqft: "4,500",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
    },
    {
      id: 3,
      title: "Coastal Beach House",
      location: "Malibu, CA",
      price: "$3,200,000",
      beds: 3,
      baths: 2,
      sqft: "2,800",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
    },
    {
      id: 4,
      title: "Ranch Estate",
      location: "Jackson, WY",
      price: "$4,500,000",
      beds: 6,
      baths: 5,
      sqft: "6,000",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
    },
    {
      id: 5,
      title: "Urban Loft",
      location: "Denver, CO",
      price: "$950,000",
      beds: 2,
      baths: 2,
      sqft: "1,800",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800"
    },
    {
      id: 6,
      title: "Mountain View Cabin",
      location: "Park City, UT",
      price: "$1,350,000",
      beds: 3,
      baths: 2,
      sqft: "2,400",
      image: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800"
    }
  ]

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>Real Estate of the West</h1>
          </div>
          <nav className="nav">
            <a href="#home">Home</a>
            <a href="#properties">Properties</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Find Your Dream Home in the West</h2>
          <p>Discover luxury properties across the American West</p>
          <div className="search-bar">
            <input type="text" placeholder="Search by location, price, or property type..." />
            <button>Search</button>
          </div>
        </div>
      </section>

      <section className="properties-section">
        <div className="container">
          <h2 className="section-title">Featured Properties</h2>
          <div className="properties-grid">
            {properties.map(property => (
              <div key={property.id} className="property-card">
                <div className="property-image">
                  <img src={property.image} alt={property.title} />
                  <div className="property-price">{property.price}</div>
                </div>
                <div className="property-info">
                  <h3>{property.title}</h3>
                  <p className="property-location">{property.location}</p>
                  <div className="property-details">
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Real Estate of the West. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
