import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>Real Estate of the West</h1>
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <div className="dropdown">
            <Link to="/properties">Properties</Link>
            <div className="dropdown-content">
              <Link to="/properties">Our Listings</Link>
              <Link to="/sell">Sell</Link>
              <Link to="/buy">Buy</Link>
            </div>
          </div>
          <Link to="/team">Team</Link>
          <Link to="/contact">Find Us</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

