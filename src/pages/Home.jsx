import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const featuredProperties = [
    {
      id: 1,
      title: "30 Cactus Rd.",
      location: "Lander, WY",
      price: "$450,000",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"
    },
    {
      id: 2,
      title: "Mountain View Estate",
      location: "Jackson, WY",
      price: "$1,250,000",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800"
    },
    {
      id: 3,
      title: "Ranch Property",
      location: "Casper, WY",
      price: "$850,000",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800"
    }
  ]

  const clientStories = [
    {
      quote: "My husband Mike and I want to express our deepest gratitude to Lynn Ritter for the tremendous job she did for us when selling our home. Leaving our dream ten-acre country home of 46 years was heartwrenching, and Lynn immediately understood. She was kind, superbly knowledgeable, and efficient. Although her schedule was extremely busy, she spent a lot of time with us, just talking, while guiding us, giving us emotional support, and expertly handling every detail. Our home sold in just a couple of days. Lynn went far above and beyond to help us through the process. I told her, and I mean it, she was an angel to us.",
      author: "Diana & Mike Kouris"
    }
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">EXCLUSIVELY BY REAL ESTATE OF THE WEST, INC.</h1>
          <p className="hero-subtitle">Your Dream Home Is One Step Away!</p>
          <div className="hero-buttons">
            <Link to="/buy" className="btn btn-primary">BUY</Link>
            <Link to="/sell" className="btn btn-secondary">SELL</Link>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Properties</h2>
          <div className="properties-grid">
            {featuredProperties.map(property => (
              <div key={property.id} className="property-card">
                <div className="property-image">
                  <img src={property.image} alt={property.title} />
                  <div className="property-badge">EXCLUSIVE</div>
                </div>
                <div className="property-info">
                  <h3>{property.title}</h3>
                  <p className="property-location">{property.location}</p>
                  <p className="property-price">{property.price}</p>
                  <Link to="/properties" className="view-btn">View Details</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all">
            <Link to="/properties" className="btn btn-outline">View All Properties</Link>
          </div>
        </div>
      </section>

      {/* Client Stories */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Client Stories</h2>
          <div className="testimonials">
            {clientStories.map((story, index) => (
              <div key={index} className="testimonial-card">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{story.quote}</p>
                <p className="testimonial-author">— {story.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Your Dream Home Is One Step Away!</h2>
          <div className="cta-buttons">
            <a href="tel:1-307-851-0881" className="cta-item">
              <h3>Call Us</h3>
              <p>1-307-851-0881</p>
            </a>
            <Link to="/contact" className="cta-item">
              <h3>Find Us</h3>
              <p>455 Main Street, Lander, WY 82520</p>
            </Link>
            <a href="mailto:REofthewest@gmail.com" className="cta-item">
              <h3>Email Us</h3>
              <p>REofthewest@gmail.com</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

