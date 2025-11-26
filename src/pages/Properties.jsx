import './Properties.css'

function Properties() {
  const properties = [
    {
      id: 1,
      title: "30 Cactus Rd.",
      location: "Lander, WY",
      price: "$450,000",
      beds: 4,
      baths: 3,
      sqft: "2,400",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
      exclusive: true
    },
    {
      id: 2,
      title: "Mountain View Estate",
      location: "Jackson, WY",
      price: "$1,250,000",
      beds: 5,
      baths: 4,
      sqft: "4,200",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
      exclusive: true
    },
    {
      id: 3,
      title: "Ranch Property",
      location: "Casper, WY",
      price: "$850,000",
      beds: 3,
      baths: 2,
      sqft: "3,100",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      exclusive: true
    },
    {
      id: 4,
      title: "Country Home",
      location: "Lander, WY",
      price: "$525,000",
      beds: 4,
      baths: 2,
      sqft: "2,800",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      exclusive: true
    },
    {
      id: 5,
      title: "Luxury Cabin",
      location: "Pinedale, WY",
      price: "$675,000",
      beds: 3,
      baths: 3,
      sqft: "2,200",
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800",
      exclusive: true
    },
    {
      id: 6,
      title: "Desert Oasis",
      location: "Rock Springs, WY",
      price: "$425,000",
      beds: 3,
      baths: 2,
      sqft: "2,000",
      image: "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800",
      exclusive: true
    }
  ]

  return (
    <div className="properties-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Listings</h1>
          <p>EXCLUSIVELY BY REAL ESTATE OF THE WEST, INC.</p>
        </div>
      </div>

      <div className="properties-content">
        <div className="container">
          <div className="properties-grid">
            {properties.map(property => (
              <div key={property.id} className="property-card">
                <div className="property-image">
                  <img src={property.image} alt={property.title} />
                  {property.exclusive && (
                    <div className="property-badge">EXCLUSIVE</div>
                  )}
                </div>
                <div className="property-info">
                  <h3>{property.title}</h3>
                  <p className="property-location">{property.location}</p>
                  <div className="property-details">
                    <span>{property.beds} Beds</span>
                    <span>{property.baths} Baths</span>
                    <span>{property.sqft} sqft</span>
                  </div>
                  <p className="property-price">{property.price}</p>
                  <button className="contact-btn">Contact Us</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Properties

