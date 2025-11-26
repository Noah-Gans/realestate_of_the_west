import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Real Estate of the West</h3>
            <p>Your trusted partner for buying and selling real estate in Wyoming.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/properties">Our Listings</Link>
            <Link to="/sell">Sell Your Home</Link>
            <Link to="/buy">Buy a Home</Link>
            <Link to="/team">Our Team</Link>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>455 Main Street</p>
            <p>Lander, WY 82520</p>
            <p>Phone: 1-307-851-0881</p>
            <p>Email: REofthewest@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Real Estate of the West, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

